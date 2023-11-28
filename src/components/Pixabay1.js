import React, { useState, useEffect } from "react";
import axios from "axios";

const Pixabay1 = () => {
  const APP_KEY = "40939990-0ae20863396650eb232eca7e3";
  const TEXT = "과일";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${TEXT}&image_type=photo&lang=ko`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공:", res.data.hits);
      } catch (err) {
        console.log("오류", err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>pixabay1</h2>
      <ul>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: "22vw" }}
            />
          ))}
        {/* {data &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.userImageURL} alt={item.tags} />
              <h3></h3>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

export default Pixabay1;
