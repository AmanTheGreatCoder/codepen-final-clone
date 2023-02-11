import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div
        className="not-team logged-out"
        data-sidebar-collapsed="false"
        data-mobile-nav-open="false"
      >
        <div id="react-page">
          <header className="main-sidebar">
            <div className="Sidebar_root-GFeJV">
              <h1
                className="Logo_root-i9NlR"
                data-component="Logo"
                data-test-id="logo"
              >
                <Link to="/">
                  <div className="Logo_small-j3ROV">
                    <svg viewBox="0 0 100 100">
                      <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                    </svg>
                    <span className="screen-reader-text">CodePen Home</span>
                  </div>
                </Link>
                <Link to="/">
                  <div className="Logo_large-UV0NA">
                    <svg
                      viewBox="0 0 138 26"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      title="CodePen"
                    >
                      <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                    </svg>
                    <span className="screen-reader-text">CodePen Home</span>
                  </div>
                </Link>
              </h1>
              <div className="SidebarToggle_toggleDesktop-4G0Xf">
                <button
                  className="SidebarToggle_toggle-TKYUk invisible-button"
                  aria-expanded="true"
                  data-collapsed="false"
                  data-test-id="collapse-button"
                  title="Toggle Navigation"
                >
                  <div className="SidebarToggle_icon-5wOkc" aria-hidden="true">
                    <span></span>
                    <svg
                      viewBox="-122.9 121.1 105.9 61.9"
                      width="20"
                      height="20"
                    >
                      <path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                    </svg>
                  </div>
                  <span className="screen-reader-text">
                    Navigation Menu Toggle
                  </span>
                </button>
                <div
                  className="SidebarToggle_openBar-Lbost"
                  data-collapsed="false"
                ></div>
              </div>
              <div className="SidebarToggle_toggleMobile-qQRFu">
                <button
                  className="SidebarToggle_toggle-TKYUk invisible-button"
                  aria-expanded="false"
                  data-collapsed="true"
                  data-test-id="collapse-button"
                  title="Toggle Navigation"
                >
                  <div className="SidebarToggle_icon-5wOkc" aria-hidden="true">
                    <span></span>
                    <svg
                      viewBox="-122.9 121.1 105.9 61.9"
                      width="20"
                      height="20"
                    >
                      <path d="m-63.2 180.3 43.5-43.5c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7L-69.9 161l-37.2-37.2c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.6c-1.9 1.8-2.8 4.2-2.8 6.6 0 2.3.9 4.6 2.6 6.5 11.4 11.5 41 41.2 43 43.3l.2.2c3.6 3.6 10.3 3.6 13.9 0z"></path>
                    </svg>
                  </div>
                  <span className="screen-reader-text">
                    Navigation Menu Toggle
                  </span>
                </button>
              </div>
              <nav
                className="navigation-wrap Sidebar_navigationWrap-COnc6"
                role="navigation"
              >
                <div className="SidebarCreate_root-PNqyr">
                  <h2 className="SidebarHeading_root-m8jTw SidebarCreate_anonHeading-JmWJu">
                    Try Our Online Editor
                  </h2>
                  <a href="/pen/" className="SidebarCreate_anonButton-NtSrZ">
                    <span>Start Coding</span>
                  </a>
                </div>
                <div className="SidebarGroup_root-VsD08">
                  <a href="/search/pens?q=" className="Sidebar_link-onAgY">
                    Search Pens
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <div className="HeaderBar_searchAndUserMenu-1TYha">
            <div className="SearchExpander_search-JXVdp">
              <form
                aria-labelledby="search-title"
                data-test-id="search-form"
                className=""
                action="/search/pens?q=null/"
              >
                <label className="SearchForm-module_searchInputWrap-fJcyw">
                  <h1 id="search-title" className="screen-reader-text">
                    Search
                  </h1>
                  <svg
                    viewBox="0 0 56.7 56.7"
                    className="SearchForm-module_iconMag-6hvXX"
                  >
                    <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
                  </svg>
                  <input
                    autoComplete="off"
                    className="SearchForm-module_searchInput-v8spF"
                    data-test-id="search-input"
                    name="q"
                    placeholder="Search CodePen..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <a
              data-test-id="signup-button"
              className="Button-module_root-xw+9D LogInAndSignUpButtons_signupButton-LlBNZ"
              data-color="green"
            >
              <Link to="/accounts/signup" style={{ color: "#fff" }}>Sign Up</Link>
            </a>

            <div
              data-test-id="login-button"
              className="Button-module_root-xw+9D LogInAndSignUpButtons_loginButton-pJov-"
            >
              <Link to="/accounts/login" style={{ color: "#fff" }}>
                Log In
              </Link>
            </div>
          </div>
          <header className="HomepageAnonHeader_root-FJ8v9">
            <svg
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              title="CodePen"
              className="HomepageAnonHeader_logo-x-Ecj"
            >
              <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
            </svg>
            <div className="width-wrapper">
              <div className="HomepageAnonHeader_illuArea-fcr7B">
                <img
                  alt="CodePen"
                  src="https://cpwebassets.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png"
                  className="HomepageAnonHeaderHero_editorStatic-mGPKt"
                />
                <div className="HomepageAnonHeaderHero_editor-gyoDf">
                  <div className="HomepageAnonHeaderHero_editorBg-emiQN"></div>
                  <div className="HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_html-BvgAZ">
                    <header>
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                      <h1>HTML</h1>
                      <svg
                        width="16"
                        height="8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                    </header>
                    <div className="HomepageAnonHeaderHero_codeContent-I6nz5">
                      <code>
                        <span className="HomepageAnonHeaderHero_cr-aN2bn">
                          &lt;div{" "}
                        </span>
                        <span className="HomepageAnonHeaderHero_cy-JVLez">
                          class
                        </span>
                        <span>=</span>
                        <span className="HomepageAnonHeaderHero_cg-49xQf">
                          "rect"
                        </span>
                        <span className="HomepageAnonHeaderHero_cr-aN2bn">
                          &gt;&lt;/div&gt;
                        </span>
                      </code>
                    </div>
                  </div>
                  <div className="HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_css-bKYqB">
                    <header>
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                      <h1>SCSS</h1>
                      <svg
                        width="16"
                        height="8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                    </header>
                    <div className="HomepageAnonHeaderHero_codeContent-I6nz5">
                      <code>
                        <p className="HomepageAnonHeaderHero_line1-r+tWR">
                          <span className="HomepageAnonHeaderHero_cy-JVLez">
                            .rect
                          </span>
                          <span>{" {"}</span>
                        </p>
                        <br />
                        <p className="HomepageAnonHeaderHero_line2-j1x2U">
                          <span className="HomepageAnonHeaderHero_cp-23ozZ">
                            background
                          </span>
                          <span>: </span>
                          <span className="HomepageAnonHeaderHero_cy-JVLez">
                            linear-gradient
                          </span>
                          (
                        </p>
                        <br />
                        <p className="HomepageAnonHeaderHero_line3-pAv+x">
                          <span className="HomepageAnonHeaderHero_co-+ACpm">
                            -119deg
                          </span>
                          ,
                        </p>
                        <br />
                        <p className="HomepageAnonHeaderHero_line4-wTffx">
                          <span className="HomepageAnonHeaderHero_cy-JVLez">
                            $gray{" "}
                          </span>
                          <span className="HomepageAnonHeaderHero_co-+ACpm">
                            0%
                          </span>
                          ,
                        </p>
                        <br />
                        <p className="HomepageAnonHeaderHero_line5-b+wBt">
                          <span className="HomepageAnonHeaderHero_cy-JVLez">
                            $dark-gray{" "}
                          </span>
                          <span className="HomepageAnonHeaderHero_co-+ACpm">
                            100%
                          </span>
                          ); {"}"}
                        </p>
                      </code>
                    </div>
                  </div>
                  <div className="HomepageAnonHeaderHero_editorCode-5pQ-m HomepageAnonHeaderHero_js-hlc9E">
                    <header>
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                      <h1>JS</h1>
                      <svg
                        width="16"
                        height="8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                          fill="#4C4F5A"
                        ></path>
                      </svg>
                    </header>
                    <div className="HomepageAnonHeaderHero_codeContent-I6nz5">
                      <code>
                        <span className="HomepageAnonHeaderHero_cy-JVLez">
                          var{" "}
                        </span>
                        <span className="HomepageAnonHeaderHero_cb--MbF+">
                          colors{" "}
                        </span>
                        = [
                        <span className="HomepageAnonHeaderHero_cg-49xQf">
                          "#74B087"
                        </span>
                        ,
                        <span className="HomepageAnonHeaderHero_cg-49xQf">
                          "#DE7300"
                        </span>
                        ,
                        <span className="HomepageAnonHeaderHero_cg-49xQf">
                          "#74B087"
                        </span>
                        ];
                        <br />
                        <br />
                        <span className="HomepageAnonHeaderHero_cc-Zftdz"></span>
                        <br />
                        <span className="HomepageAnonHeaderHero_cy-JVLez">
                          function
                        </span>
                        <span className="HomepageAnonHeaderHero_cb--MbF+">
                          {" "}
                          animate
                        </span>
                        (){" {}"};
                      </code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="HomepageAnonHeader_copy-gIp7Y">
                <div className="HomepageAnonHeader_logoAndHeadline-VL+wL">
                  <svg
                    viewBox="0 0 100 100"
                    title="CodePen"
                    className="HomepageAnonHeader_glyph-Oxxoz"
                  >
                    <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                  </svg>
                  <h1>
                    The best place to build, test, and discover
                    front-end&nbsp;code.
                  </h1>
                </div>
                <p>
                  CodePen is a <strong>social development environment</strong>{" "}
                  for front-end designers and developers. Build and deploy a
                  website, show off your work, build test cases to learn and
                  debug, and find inspiration.
                </p>
                <a
                  href="/accounts/signup/user/free/"
                  className="button big green bold"
                >
                  <span>Sign Up for Free</span>
                </a>
              </div>
              <img
                src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"
                alt=""
                className="HomepageAnonHeader_bg-btg1n"
              />
            </div>
          </header>
          <section className="HomepageAnonCards_root-tWUkd">
            <div className="width-wrapper">
              <div className="HomepageAnonCards_item-baxkw">
                <div className="HomepageAnonCards_icon-AFa+u">
                  <img
                    src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
                    alt="Icon of conveyer belt with boxes on it."
                  />
                </div>
                <h2 data-test-id="promo-buildtest">Build &amp; Test</h2>
                <p>
                  Get work done quicker by building out
                  <strong>entire projects</strong> or isolating code to
                  <strong>test features and animations</strong>
                </p>
                <Link to="/pen">
                  <div className="button">
                    <span>Try the Editor</span>
                  </div>
                </Link>
              </div>
              <img
                src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg"
                alt=""
                className="HomepageAnonCards_bg--UmJ9"
              />
            </div>
          </section>

          <footer
            className="SiteFooterStyles_linkFooter-O8s+b"
            id="link-footer"
          >
            <div
              className="width-wrapper SiteFooterStyles_linkFooterInside-mxNkC"
              id="link-footer-width-wrapper"
            >
              <nav
                id="link-footer-codepen-links"
                aria-label="Links about CodePen"
              >
                <h4>CodePen</h4>
                <a href="/about/">About</a>
                <a href="https://blog.codepen.io/">Blog</a>
                <a href="https://blog.codepen.io/radio/">Podcast</a>
                <a href="https://blog.codepen.io/documentation/">
                  Documentation
                </a>
                <a href="/support/">Support</a>
                <a href="https://cottonbureau.com/people/codepen-team">Shop</a>
              </nav>
              <nav
                id="link-footer-for-links"
                aria-label="CodePen for different uses"
              >
                <h4>For</h4>
                <a href="/features/teams">Teams</a>
                <a href="/features/education">Education</a>
                <a href="/features/privacy">Privacy</a>
                <a href="/features/embeds">Embeds</a>
                <a href="/features/asset-hosting">Asset Hosting</a>
              </nav>
              <nav
                id="link-footer-social-links"
                aria-label="CodePen on Social Media"
              >
                <h4>Social</h4>
                <a href="https://www.youtube.com/c/CodePenOfficial">YouTube</a>
                <a href="https://twitter.com/CodePen">Twitter</a>
                <a href="https://www.instagram.com/codepen/">Instagram</a>
                <a href="https://fosstodon.org/@codepen">Mastodon</a>
              </nav>
              <nav
                id="link-footer-community-links"
                aria-label="CodePen Community"
              >
                <h4>Community</h4>
                <a href="/spark/">Spark</a>
                <a href="/challenges/">Challenges</a>
                <a href="/topics/">Topics</a>
                <a href="https://blog.codepen.io/documentation/code-conduct/">
                  Code of Conduct
                </a>
              </nav>
              <div
                className="SiteFooterStyles_copyright-geeAI"
                id="link-footer-copyright"
              >
                <h1
                  className="Logo_root-i9NlR"
                  data-component="Logo"
                  data-test-id="logo"
                >
                  <Link to="/">
                    <div className="Logo_small-j3ROV">
                      <svg viewBox="0 0 100 100">
                        <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                      </svg>
                      <span className="screen-reader-text">CodePen Home</span>
                    </div>
                  </Link>
                  <Link to="/">
                    <div className="Logo_large-UV0NA">
                      <svg
                        viewBox="0 0 138 26"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        title="CodePen"
                      >
                        <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
                      </svg>
                      <span className="screen-reader-text">CodePen Home</span>
                    </div>
                  </Link>
                </h1>
                <p>©2023 CodePen</p>
                <p className="slogan">
                  <em>Demo or it didn't happen.</em>
                </p>
                <p className="SiteFooterStyles_links-kp+Wk">
                  <a href="https://blog.codepen.io/documentation/terms-of-service/">
                    Terms of Service
                  </a>
                  ·
                  <a href="https://blog.codepen.io/documentation/privacy-policy/">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
