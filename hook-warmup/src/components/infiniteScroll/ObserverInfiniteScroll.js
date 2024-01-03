import React, { useEffect, useRef, useState } from "react";

function ObserverInfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchItems = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    const json = await data.json();
    setItems((prevItems) => [...prevItems, ...json]);
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const handleObserver = (entries) => {
    const target = entries[0];
    console.log("entries ", entries);
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) {
      console.log("loader.current ", loader.current);
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <div style={{ width: "200px", margin: "10px" }}>
            <img
              src={item.thumbnailUrl}
              alt={item.title}
              style={{ width: "100%" }}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div ref={loader} style={{ height: "10px", background: "transparent" }} />
    </div>
  );
}

export default ObserverInfiniteScroll;
