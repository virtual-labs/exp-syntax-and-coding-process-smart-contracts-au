import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import {
  UpdateshowCodeEdtior,
  updateMethodDemo,
} from "../redux/slices/FileExplorerSlice";

const OptionsComponent = () => {
  const dispatch = useDispatch();
  const onHandleClick = (name) => {
    dispatch(updateMethodDemo(name));
    dispatch(UpdateshowCodeEdtior(false));
  };
  return (
    <div
      style={{
        flex: 0.8,
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 500, height: 300, background: "transparent" }}>
        <div>
          <p style={{ textAlign: "center", color: "white" }}>
            Select the Tutorial
          </p>
        </div>
        <div
          style={{
            display: "flex",
            height: "150px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {["If Else", "Loop", "Classes"].map((item, index) => {
            return (
              <div key={index} style={{ marginInline: "5px" }}>
                <Button
                  style={{ width: 200, height: 50 }}
                  onClick={() => onHandleClick(item)}
                >
                  {item}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OptionsComponent;
