import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const APP_KEY = "40939990-0ae20863396650eb232eca7e3";

  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const focusRef = useRef();

  const getData = async () => {
    try {
      const res = await axios.get(URL);
      setData(res.data.hits);
      console.log("성공:", res.data.hits);
    } catch (err) {
      console.log("오류", err);
    }
  };
  useEffect(() => {
    const fetchDataAndSetData = async () => {
      await getData();
    };

    fetchDataAndSetData();
  }, []);

  const onSearch = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    getData();
    setText("");
    focusRef.current.focus();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=${text}&image_type=photo&lang=ko`;

  return (
    <div className="bigBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={onSearch}
          ref={focusRef}
          onKeyPress={handleKeyPress}
        />
        <button type="submit">검색</button>
      </form>
      <section>
        <ul>
          {data &&
            data.map((image) => (
              <li key={image.id}>
                <h2>#{image.user}</h2>
                <img src={image.webformatURL} alt={image.tags} />
                <p>태그: {image.tags}</p>
                <p>뷰어: {image.views}</p>
                <p>종류: {image.type}</p>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Gallery;
