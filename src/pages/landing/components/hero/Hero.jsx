import React, { useEffect, useState } from "react";
import { MainContainer } from "../../../../global/styles/globalStyle";
import "./Hero.scss";
import api from "../../../../utils/api";

const Hero = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    api
      .get("/photos/random")
      .then((res) => {
        setBackground(res.data.links.download);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer
      className="Hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div>
        <h3>Unsplash</h3>
        <span>
          The internet’s source for visuals. <br />
          Powered by creators everywhere.
        </span>
      </div>
    </MainContainer>
  );
};

export default Hero;
