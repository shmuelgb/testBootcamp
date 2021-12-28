import React, { useState, useEffect, useRef } from "react";
import black_1 from "./images/black_1.jpg";
import color_1 from "./images/color_1.jpg";
import black_2 from "./images/black_2.jpg";
import color_2 from "./images/color_2.jpg";
import "./App.css";

export default function App() {
  const [image1, setImage1] = useState(black_1);
  const [image2, setImage2] = useState(black_2);
  const image1Ref = useRef();
  const image2Ref = useRef();

  useEffect(() => {
    image1Ref.current.src = image1;
    image2Ref.current.src = image2;
  }, [image1, image2]);

  return (
    <div>
      <img
        onMouseEnter={() => setImage1(color_1)}
        onMouseLeave={() => setImage1(black_1)}
        height="300"
        width="400"
        ref={image1Ref}
        src={image1}
        alt="1"
      />
      <img
        onMouseEnter={() => setImage2(color_2)}
        onMouseLeave={() => setImage2(black_2)}
        height="300"
        width="400"
        ref={image2Ref}
        src={image2}
        alt="2"
      />
    </div>
  );
}
