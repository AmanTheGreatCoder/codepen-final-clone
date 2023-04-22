/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <div
        className='not-team logged-out'
        data-sidebar-collapsed='false'
        data-mobile-nav-open='false'
      >
        <Sidebar />
        <div className='HeaderBar_searchAndUserMenu-1TYha'>
          <Link to='/accounts/signup'>
            <a
              data-test-id='signup-button'
              className='Button-module_root-xw+9D LogInAndSignUpButtons_signupButton-LlBNZ'
              data-color='green'
            >
              Sign Up
            </a>
          </Link>
          <Link to='/accounts/login'>
            <a
              data-test-id='login-button'
              className='Button-module_root-xw+9D LogInAndSignUpButtons_loginButton-pJov-'
            >
              Log In
            </a>
          </Link>
        </div>
        <header className='HomepageAnonHeader_root-FJ8v9'>
          <svg
            viewBox='0 0 138 26'
            fill='none'
            stroke='#fff'
            strokeWidth='2.3'
            strokeLinecap='round'
            strokeLinejoin='round'
            title='CodePen'
            className='HomepageAnonHeader_logo-x-Ecj'
          >
            <path d='M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
          </svg>
          <div className='width-wrapper'>
            <div className='HomepageAnonHeader_illuArea-fcr7B'>
              <img
                alt='CodePen'
                src='https://cpwebassets.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png'
                className='HomepageAnonHeaderHero_editorStatic-mGPKt'
              />
              <div className='HomepageAnonHeaderHero_editor-gyoDf'>
                <div className='HomepageAnonHeaderHero_editorBg-emiQN'></div>
                <div className='HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_html-BvgAZ'>
                  <header>
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                    <h1>HTML</h1>
                    <svg
                      width='16'
                      height='8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                  </header>
                  <div className='HomepageAnonHeaderHero_codeContent-I6nz5'>
                    <code>
                      <span className='HomepageAnonHeaderHero_cr-aN2bn'>
                        &lt;div{' '}
                      </span>
                      <span className='HomepageAnonHeaderHero_cy-JVLez'>
                        class
                      </span>
                      <span>=</span>
                      <span className='HomepageAnonHeaderHero_cg-49xQf'>
                        "rect"
                      </span>
                      <span className='HomepageAnonHeaderHero_cr-aN2bn'>
                        &gt;&lt;/div&gt;
                      </span>
                    </code>
                  </div>
                </div>
                <div className='HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_css-bKYqB'>
                  <header>
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                    <h1>SCSS</h1>
                    <svg
                      width='16'
                      height='8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                  </header>
                  <div className='HomepageAnonHeaderHero_codeContent-I6nz5'>
                    <code>
                      <p className='HomepageAnonHeaderHero_line1-r+tWR'>
                        <span className='HomepageAnonHeaderHero_cy-JVLez'>
                          .rect
                        </span>
                        <span>{' {'}</span>
                      </p>
                      <br />
                      <p className='HomepageAnonHeaderHero_line2-j1x2U'>
                        <span className='HomepageAnonHeaderHero_cp-23ozZ'>
                          background
                        </span>
                        <span>: </span>
                        <span className='HomepageAnonHeaderHero_cy-JVLez'>
                          linear-gradient
                        </span>
                        (
                      </p>
                      <br />
                      <p className='HomepageAnonHeaderHero_line3-pAv+x'>
                        <span className='HomepageAnonHeaderHero_co-+ACpm'>
                          -119deg
                        </span>
                        ,
                      </p>
                      <br />
                      <p className='HomepageAnonHeaderHero_line4-wTffx'>
                        <span className='HomepageAnonHeaderHero_cy-JVLez'>
                          $gray{' '}
                        </span>
                        <span className='HomepageAnonHeaderHero_co-+ACpm'>
                          0%
                        </span>
                        ,
                      </p>
                      <br />
                      <p className='HomepageAnonHeaderHero_line5-b+wBt'>
                        <span className='HomepageAnonHeaderHero_cy-JVLez'>
                          $dark-gray{' '}
                        </span>
                        <span className='HomepageAnonHeaderHero_co-+ACpm'>
                          100%
                        </span>
                        ); {'}'}
                      </p>
                    </code>
                  </div>
                </div>
                <div className='HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_js-hlc9E'>
                  <header>
                    <svg
                      width='16'
                      height='16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                    <h1>JS</h1>
                    <svg
                      width='16'
                      height='8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z'
                        fill='#4C4F5A'
                      ></path>
                    </svg>
                  </header>
                  <div className='HomepageAnonHeaderHero_codeContent-I6nz5'>
                    <code>
                      <span className='HomepageAnonHeaderHero_cy-JVLez'>
                        var{' '}
                      </span>
                      <span className='HomepageAnonHeaderHero_cb--MbF+'>
                        colors{' '}
                      </span>
                      = [
                      <span className='HomepageAnonHeaderHero_cg-49xQf'>
                        "#74B087"
                      </span>
                      ,
                      <span className='HomepageAnonHeaderHero_cg-49xQf'>
                        "#DE7300"
                      </span>
                      ,
                      <span className='HomepageAnonHeaderHero_cg-49xQf'>
                        "#74B087"
                      </span>
                      ];
                      <br />
                      <br />
                      <span className='HomepageAnonHeaderHero_cc-Zftdz'></span>
                      <br />
                      <span className='HomepageAnonHeaderHero_cy-JVLez'>
                        function
                      </span>
                      <span className='HomepageAnonHeaderHero_cb--MbF+'>
                        {' '}
                        animate
                      </span>
                      (){' {}'};
                    </code>
                  </div>
                </div>
              </div>
            </div>
            <div className='HomepageAnonHeader_copy-gIp7Y'>
              <div className='HomepageAnonHeader_logoAndHeadline-VL+wL'>
                <h1>
                  The best place to build, test, and discover
                  front-end&nbsp;code.
                </h1>
              </div>
              <p>
                Codestream is a <strong>social development environment</strong>
                for front-end designers and developers. Build and deploy a
                website, show off your work, build test cases to learn and
                debug, and find inspiration.
              </p>
              <a
                href='/accounts/signup/user/free/'
                className='button big green bold'
              >
                <span>Sign Up for Free</span>
              </a>
            </div>
            <img
              src='https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg'
              alt=''
              className='HomepageAnonHeader_bg-btg1n'
            />
          </div>
        </header>
        <section className='HomepageAnonCards_root-tWUkd'>
          <div className='width-wrapper'>
            <div className='HomepageAnonCards_item-baxkw'>
              <div className='HomepageAnonCards_icon-AFa+u'>
                <img
                  src='https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg'
                  alt='Icon of conveyer belt with boxes on it.'
                />
              </div>
              <h2 data-test-id='promo-buildtest'>Build &amp; Test</h2>
              <p>
                Get work done quicker by building out
                <strong>entire projects</strong> or isolating code to
                <strong>test features and animations</strong>
              </p>
              <Link to='/pen'>
                <div className='button'>
                  <span>Try the Editor</span>
                </div>
              </Link>
            </div>
            <img
              src='https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg'
              alt=''
              className='HomepageAnonCards_bg--UmJ9'
            />
          </div>
        </section>
        <footer className='SiteFooterStyles_linkFooter-O8s+b' id='link-footer'>
          <div
            className='width-wrapper SiteFooterStyles_linkFooterInside-mxNkC'
            id='link-footer-width-wrapper'
          >
            <div
              className='SiteFooterStyles_copyright-geeAI'
              id='link-footer-copyright'
              style={{ position: 'relative' }}
            >
              <h1
                className='Logo_root-i9NlR'
                data-component='Logo'
                data-test-id='logo'
              >
                <Link to='/'>
                  <div
                    className='Logo_large-UV0NA'
                    style={{
                      paddingTop: '10px',
                      width: '100%',
                      height: '100%',
                      padding: '0',
                    }}
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
              <p>©2023 Codestream</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
