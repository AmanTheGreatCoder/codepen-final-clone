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
                <div
                  className='Logo_large-UV0NA'
                  style={{ paddingTop: '10px', width: '100%', height: '100%' }}
                >
                  <span
                    className='screen-reader-text'
                    style={{
                      fontSize: '29px',
                      position: 'relative',
                      color: '#fff',
                      top: '0',
                      left: '0',
                    }}
                  >
                    Codestream
                  </span>
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
                <Link to='/pen' className='SidebarCreate_anonButton-NtSrZ'>
                  <span>Start Coding</span>
                </Link>
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
