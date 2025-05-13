import { useState, useEffect } from "react";

const QuizMaker = () => {
  const [data, setData] = useState<string>("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result: string = await response.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>Hello Quiz Maker!</div>
      {data && <div>{data}</div>}
    </>
  );
};

export default QuizMaker;
