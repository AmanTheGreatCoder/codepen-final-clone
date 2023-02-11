import React from "react";
import Editor from "../components/Editor";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useState, useLayoutEffect } from "react";
import styles from "../css/Pen.module.scss";
import { Link } from "react-router-dom";

const Pen = () => {
  const [htmlStr, setHTML] = useState("");
  const [cssStr, setCSS] = useState("");
  const [jsStr, setJS] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useLayoutEffect(() => {
    setSrcDoc(`<html>
  <body>${htmlStr}</body>
  <style>${cssStr}</style>
  <script>${jsStr}</script>
  </html>`);
  }, [htmlStr, cssStr, jsStr]);

  return (
    <div className={styles.penBody}>
      <div className={styles.top}>
        <div className={styles.Header}>
          <Link to="/">
            <div className={styles.logo}>
              <img
                src="https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg"
                alt=""
              />
            </div>
          </Link>
          <div className={styles.textSection}>
            <div className={styles.penTitle}>Untitled</div>
            <div className={styles.penAuthor}>Anonymous</div>
          </div>

          <div className={styles.headerBtns}>
            <button className={styles.saveBtn}>Save</button>
            <button className={styles.delBtn}>Delete</button>
            <div className={styles.authBtns}>
              <button className={styles.signinBtn}>Sign In</button>
              <button className={styles.signupBtn}>Sign Up</button>
            </div>
          </div>
        </div>

        <div className={styles.editors}>
          <Editor
            className={styles.editor}
            onChange={setHTML}
            value={htmlStr}
            displayName="HTML"
            extensions={[
              html({
                autoCloseTags: true,
                selfClosingTags: true,
                matchClosingTags: true,
              }),
            ]}
          />
          <Editor
            className={styles.editor}
            onChange={setCSS}
            value={cssStr}
            displayName="CSS"
            extensions={[css()]}
          />
          <Editor
            className={styles.editor}
            onChange={setJS}
            value={jsStr}
            displayName="JS"
            extensions={[javascript({ jsx: true, typescript: true })]}
          />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.outputWindow}>
          <iframe
            title="output"
            className={styles.iframe}
            srcDoc={srcDoc}
          />
        </div>
      </div>
    </div>
  );
};

export default Pen;
