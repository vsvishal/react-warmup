import React, { useEffect, useState } from "react";

function InfiniteScroll() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount(count + 50);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }

  console.log("elements ", elements);
  return (
    <div>
      <main style={{ margin: "18px" }}>{elements}</main>
    </div>
  );
}

export default InfiniteScroll;
