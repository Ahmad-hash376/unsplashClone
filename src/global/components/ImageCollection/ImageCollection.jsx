import React, { useEffect, useRef, useState } from "react";
import "./ImageCollection.scss";
import api from "../../../utils/api";
import { MainContainer } from "../../styles/globalStyle";

const ImageCollection = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const loaderDiv = useRef(null);
  useEffect(() => {
    api
      .get(`/search/photos?query=office&page=${page}`)
      .then((res) => {
        setList([...list, ...res.data.results]);
      })
      .then((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    if (list.length > 0) {
      let obs = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPage((prev) => prev + 30);
        }
      });
      obs.observe(loaderDiv.current);
    }
  }, [list.length]);
  return (
    <MainContainer className="ImageCollection">
      {list.map(({ links }, index) => (
        <img key={index} src={links?.download} alt="" />
      ))}
      <div ref={loaderDiv}></div>
    </MainContainer>
  );
};

export default ImageCollection;
