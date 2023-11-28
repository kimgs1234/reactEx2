import React, { useState, useEffect } from "react";
import axios from "axios";
const API1 = () => {
  const [data, setData] = useState(null);
  const URL = `https://jsonplaceholder.typicode.com/todos/1`;

  // 버튼을 클릭하면
  const handleClick = () => {
    //   axios
    //     .get(URL)
    //     .then((res) => {
    //       setData(res.data);
    //       console.log("요청 성공: ", res.data);
    //     })
    //     .catch((err) => console.log(`오류:`, err));
    // };
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data);
        console.log("요청 성공: ", res.data);
      } catch (err) {
        console.log(`오류:`, err);
      }
    };
    getData();
  };
  return (
    <div>
      <h2>Axios</h2>
      <button onClick={handleClick}>불러오기</button>
      {data && (
        <ul>
          <li>userId:{data.userId}</li>
          <li>id :{data.id}</li>
          <li>title : {data.title}</li>
          <li>completed: {data.completed ? "true" : "false"}</li>
        </ul>
      )}
      {/* 
      js ) 
        const data = {
          userId:1,
          id:1,
          title: "delectus aut autem",
          completed: false
        }
        JSON ) 
        {
          "userId":1,
          "id":1,
          "title": "delectus aut autem"
          "completed" :false
        }
        js -> JSON
          JSON.stringify

        JSON -> js
          JSON.parse();
      
      */}
      <hr />
      <h3>JSON</h3>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default API1;
