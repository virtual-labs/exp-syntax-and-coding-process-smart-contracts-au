/* eslint-disable no-undef */
import {
  BulbFilled,
  CaretDownFilled,
  CloseOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
// import MonacoEditor from "react-monaco-editor";
import Editor from "@monaco-editor/react";
import {
  updateActiveFile,
  updateShowConsole,
  uploadEditorContent,
} from "../redux/slices/ConsoleSlice";
import { useSelector, useDispatch } from "react-redux";
import solidity from "/images/solidity.png";
import OptionsComponent from "./OptionComponent";
import { UpdateshowCodeEdtior } from "../redux/slices/FileExplorerSlice";
import { classesCode, ifElsecode, loopCode } from "../data/ifElse";

const CodeEditor = () => {
  const dispatch = useDispatch();

  const { showConsole, activeFile, editorContent } = useSelector(
    (state) => state.consoleReducer
  );

  const { showSideNav, fileNameArray, showCodeEditor, methodDemo } =
    useSelector((state) => state.fileExpoReducer);

  const [theme, setTheme] = useState("vs-dark");

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c") {
        dispatch(updateShowConsole(!showConsole));
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });
  const onHandleClick = () => {
    dispatch(updateShowConsole(!showConsole));
  };
  const onHandleFileClick = (index) => {
    dispatch(updateActiveFile(index));
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "vs-dark" : "light");
  };

  const handleKeyDown = (event) => {
    // Check for "Ctrl + S" (key code 83)
    if (event.ctrlKey && event.keyCode === 83) {
      event.preventDefault(); // Prevent the default browser save action
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.addEventListener("keydown", handleKeyDown);
    };
  }, [fileNameArray]);

  const handleEditorChange = (value) => {
    const rTabs = (str) => str.trim().replace(/^ {4}/gm, "");
    console.log(activeFile);
    dispatch(
      uploadEditorContent({
        ...editorContent,
        [activeFile]: rTabs(value),
      })
    );
  };

  useEffect(() => {
    if (methodDemo === "If Else") {
      console.log("hello");
      dispatch(
        uploadEditorContent({
          ...editorContent,
          [activeFile]: ifElsecode(
            fileNameArray[activeFile].slice(
              0,
              fileNameArray[activeFile].lastIndexOf(".sol")
            )
          ),
        })
      );
    } else if (methodDemo === "Loop") {
      console.log("hello");
      dispatch(
        uploadEditorContent({
          ...editorContent,
          [activeFile]: loopCode(
            fileNameArray[activeFile].slice(
              0,
              fileNameArray[activeFile].lastIndexOf(".sol")
            )
          ),
        })
      );
    } else if (methodDemo === "Classes") {
      console.log("hello");
      dispatch(
        uploadEditorContent({
          ...editorContent,
          [activeFile]: classesCode(
            fileNameArray[activeFile].slice(
              0,
              fileNameArray[activeFile].lastIndexOf(".sol")
            )
          ),
        })
      );
    }
  }, [methodDemo]);
  console.log(methodDemo);
  return (
    <div
      style={{
        flex: showSideNav ? 0.8 : 0.95,
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {fileNameArray.length > 0 && (
        <div
          style={{
            height: 40,
            background: theme === "vs-dark" ? "#1e1e1e" : "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 0.9, marginLeft: 15, display: "flex" }}>
            {fileNameArray.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: 100,
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 10px",
                    border: 0.5,
                    borderStyle: "solid",
                    borderColor:
                      index === activeFile ? "yellow" : "transparent",
                    cursor: "pointer",
                    boxShadow:
                      theme === "vs-dark"
                        ? "green 0px 0px 8px"
                        : "grey 0px 0px 8px",
                    borderRadius: 20,
                    marginInline: 10,
                  }}
                >
                  <div
                    onClick={() => onHandleFileClick(index)}
                    style={{ flex: 0.95 }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        color: theme === "vs-dark" ? "white" : "black",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                  <CloseOutlined
                    style={{
                      fontSize: 12,
                      color: theme === "vs-dark" ? "white" : "black",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            style={{
              flex: 0.1,
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 15,
              alignItems: "center",
            }}
          >
            <BulbFilled
              onClick={toggleTheme}
              style={{ color: theme === "light" ? "black" : "white" }}
            />
          </div>
        </div>
      )}

      {fileNameArray.length === 0 && (
        <div
          style={{
            height: showConsole ? "60%" : "calc(100% - 50px)",
            background: "#191d1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "10%",
            }}
          >
            <img
              src={solidity}
              alt="solidity"
              style={{ width: 124, height: 124 }}
            />
            <p style={{ color: "white" }}>Learn Solidity</p>
            <div style={{ width: "500px", marginTop: 25 }}>
              <div style={{ display: "flex" }}>
                <FileAddOutlined style={{ color: "white" }} />

                <p style={{ color: "white", marginInline: "10px" }}>
                  : ---&gt; New File
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ color: "white" }}>Ctrl + Enter file</p>
                <p style={{ color: "white", marginInline: "10px" }}>
                  : ---&gt; Create a file
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {fileNameArray.length > 0 && activeFile !== null && !showCodeEditor && (
        <Editor
          height={showConsole ? "60%)" : "calc(100% - 49px)"}
          theme={theme}
          language="solidity"
          value={editorContent[activeFile]}
          onChange={handleEditorChange}
          options={{
            suggestOnTriggerCharacters: true,
            copyWithSyntaxHighlighting: true,
          }}
        />
      )}
      {fileNameArray.length > 0 && showCodeEditor && <OptionsComponent />}
      <div
        style={{
          background: "#30322f",
          width: "100%",
          height: showConsole ? "40%" : "20px",
          position: "absolute",
          bottom: 5,
        }}
      >
        <div
          style={{
            width: "100%",
            padding: 0,
            height: 20,
          }}
        >
          {showConsole && (
            <Tooltip title={"Hide Terminal"}>
              <CaretDownFilled
                onClick={onHandleClick}
                style={{
                  marginInline: 10,
                  color: "yellow",
                }}
                size={10}
                color="red"
              />
            </Tooltip>
          )}
          {!showConsole && (
            <Tooltip title={"Show Terminal"}>
              <CaretDownFilled
                onClick={onHandleClick}
                style={{
                  marginInline: 10,
                  color: "yellow",
                }}
                size={10}
                color="red"
              />
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
