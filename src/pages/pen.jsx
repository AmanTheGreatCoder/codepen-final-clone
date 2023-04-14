/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState } from 'react';
import Editor from '../components/Editor';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import styles from '../css/Pen.module.scss';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Pen = () => {
  const [htmlStr, setHTML] = useState('');
  const [cssStr, setCSS] = useState('');
  const [jsStr, setJS] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useLayoutEffect(() => {
    const html = localStorage.getItem('html');
    const css = localStorage.getItem('css');
    const js = localStorage.getItem('js');
    if (html) {
      setHTML(html);
    }
    if (css) {
      setCSS(css);
    }
    if (js) {
      setJS(js);
    }
  }, []);

  useLayoutEffect(() => {
    saveData();
    setSrcDoc(`<html>
  <body>${htmlStr}</body>
  <style>${cssStr}</style>
  <script>${jsStr}</script>
  </html>`);
  }, [htmlStr, cssStr, jsStr]);

  const saveData = () => {
    if (htmlStr !== '') {
      localStorage.setItem('html', htmlStr);
    }
    if (cssStr !== '') {
      localStorage.setItem('css', cssStr);
    }
    if (jsStr !== '') {
      localStorage.setItem('js', jsStr);
    }
    console.log('saving data');
  };

  return (
    <React.Fragment>
      <div>
        <Sidebar />
      </div>
      <div className={styles.penBody}>
        <div className={styles.top}>
          <div className={styles.Header}>
            <Link to='/'>
              <div className={styles.logo}>
                <img
                  src='https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg'
                  alt=''
                />
              </div>
            </Link>
            <div className={styles.textSection}>
              <div className={styles.penTitle}>Untitled</div>
              <div className={styles.penAuthor}>Anonymous</div>
            </div>

            <div className={styles.headerBtns}>
              <button onClick={saveData} className={styles.saveBtn}>
                Save
              </button>
              <div className={styles.authBtns}>
                <button
                  onClick={() => {
                    window.location.href = '/accounts/login';
                  }}
                  className={styles.signinBtn}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/accounts/signup';
                  }}
                  className={styles.signupBtn}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div className={styles.editors}>
            <Editor
              className={styles.editor}
              onChange={setHTML}
              value={htmlStr}
              displayName='HTML'
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
              displayName='CSS'
              extensions={[css()]}
            />
            <Editor
              className={styles.editor}
              onChange={setJS}
              value={jsStr}
              displayName='JS'
              extensions={[javascript({ jsx: true, typescript: true })]}
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.outputWindow}>
            <iframe title='output' className={styles.iframe} srcDoc={srcDoc} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pen;
