import React from "react";

const ScrapbookImage = (props) =>{
    console.log(props);
    // console.log(props.about.style);
    const {src, style} = props.about;
  return(
      <img src={src} className="scrapbook-image" style={style}/>
  )
};

export default ScrapbookImage;