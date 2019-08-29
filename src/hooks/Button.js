import React, { useState, useEffect } from "react";

export const Button = props => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log("TCL: data", data);
        setIsLoading(false);
      });
  };

  //   useEffect(() => {});
  //   useEffect(() => {
  //     fetchData();
  //   }, [name]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <button onClick={() => fetchData()}>Click me</button>
    </div>
  );
};
