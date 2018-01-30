import React from "react";
import "../assets/css/scrapbook.css";
import ImageData from "./image_data";
import ScrapbookImage from "./scrapbook_images"

const Scrapbook = () =>{
    const images = ImageData.map((item, index) =>{
        return <ScrapbookImage key={index} about={item}/>
    });
  return(
      <div className="scrapbook-container">
          {images}
      </div>
  )
};

export default Scrapbook;