/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Editor from '../components/Editor';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import styles from '../css/Pen.module.scss';
import { Link } from 'react-router-dom';

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
        <header className='main-sidebar'>
          <div className='Sidebar_root-GFeJV'>
            <h1
              className='Logo_root-i9NlR'
              data-component='Logo'
              data-test-id='logo'
            >
              <Link to='/'>
                <div className='Logo_small-j3ROV'>
                  <svg viewBox='0 0 100 100'>
                    <path d='M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z'></path>
                  </svg>
                  <span className='screen-reader-text'>CodePen Home</span>
                </div>
              </Link>
              <Link to='/'>
                <div className='Logo_large-UV0NA'>
                  <svg
                    viewBox='0 0 138 26'
                    fill='none'
                    stroke='#fff'
                    strokeWidth='2.3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    title='CodePen'
                  >
                    <path d='M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
                  </svg>
                  <span className='screen-reader-text'>CodePen Home</span>
                </div>
              </Link>
            </h1>
            <div className='SidebarToggle_toggleDesktop-4G0Xf'>
              <button
                className='SidebarToggle_toggle-TKYUk invisible-button'
                aria-expanded='true'
                data-collapsed='false'
                data-test-id='collapse-button'
                title='Toggle Navigation'
              >
                <div className='SidebarToggle_icon-5wOkc' aria-hidden='true'>
                  <span></span>
                  <svg viewBox='-122.9 121.1 105.9 61.9' width='20' height='20'>
                    <path d='m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z'></path>
                  </svg>
                </div>
                <span className='screen-reader-text'>
                  Navigation Menu Toggle
                </span>
              </button>
              <div
                className='SidebarToggle_openBar-Lbost'
                data-collapsed='false'
              ></div>
            </div>
            <div className='SidebarToggle_toggleMobile-qQRFu'>
              <button
                className='SidebarToggle_toggle-TKYUk invisible-button'
                aria-expanded='false'
                data-collapsed='true'
                data-test-id='collapse-button'
                title='Toggle Navigation'
              >
                <div className='SidebarToggle_icon-5wOkc' aria-hidden='true'>
                  <span></span>
                  <svg viewBox='-122.9 121.1 105.9 61.9' width='20' height='20'>
                    <path d='m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z'></path>
                  </svg>
                </div>
                <span className='screen-reader-text'>
                  Navigation Menu Toggle
                </span>
              </button>
            </div>
            <nav
              className='navigation-wrap Sidebar_navigationWrap-COnc6'
              role='navigation'
            >
              <div className='SidebarCreate_root-PNqyr'>
                <h2 className='SidebarHeading_root-m8jTw SidebarCreate_anonHeading-JmWJu'>
                  Try Our Online Editor
                </h2>
                <a href='/pen/' className='SidebarCreate_anonButton-NtSrZ'>
                  <span>Start Coding</span>
                </a>
              </div>
              <div className='SidebarGroup_root-VsD08'>
                <a href='/search/pens?q=' className='Sidebar_link-onAgY'>
                  Search Pens
                </a>
              </div>
            </nav>
          </div>
        </header>
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
