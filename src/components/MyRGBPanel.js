import React, { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);
  const [textColor, setTextColor] = useState("red"); // 初始文字颜色为红色

  const updateR = (v) => {
    setR(v);
    updateTextColor();
  };
  const updateG = (v) => {
    setG(v);
    updateTextColor();
  };
  const updateB = (v) => {
    setB(v);
    updateTextColor();
  };

  const updateTextColor = () => {
    // 根据 RGB 值计算颜色对比度，如果对比度较低，则设置文字颜色为白色，否则为黑色
    const contrast =
      (r * 299 + g * 587 + b * 114) / 1000;
    if (contrast > 125) {
      setTextColor("black");
    } else {
      setTextColor("white");
    }
  };

  const rgbCss = {
    border: "1px solid blue",
    borderRadius: "20px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };

  return (
    <>
      <div style={rgbCss}>
        <h2 style={{ color: textColor }}>目前色彩</h2>
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} />
        <span>G: </span>
        <MySlider onChange={updateG} />
        <span>B: </span>
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

export default MyRGBPanel;
