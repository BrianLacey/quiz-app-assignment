import { useState, useEffect } from "react";

interface data {
  greeting: string;
  subject: string;
}

const QuizMaker = () => {
  const [data, setData] = useState<data>({
    greeting: "",
    subject: "",
  });

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result: data = await response.json();
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
      {data && (
        <>
          <div>Greeting: {data.greeting}</div>
          <div>Subject: {data.subject}</div>
        </>
      )}
    </>
  );
};

export default QuizMaker;
