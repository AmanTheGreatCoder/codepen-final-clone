import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div
        className="body-login logged-out not-team"
        data-sidebar-collapsed="false"
        data-mobile-nav-open="false"
      >
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
                  <svg viewBox="-122.9 121.1 105.9 61.9" width="20" height="20">
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
                  <svg viewBox="-122.9 121.1 105.9 61.9" width="20" height="20">
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
        <div id="react-search-and-user-menu">
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
            <Link
              data-test-id="signup-button"
              className="Button-module_root-xw+9D LogInAndSignUpButtons_signupButton-LlBNZ"
              data-color="green"
              to="/accounts/login"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="login-wrap">
          <header className="login-header">
            <h2 className="little-big-header">Sign Up!</h2>
          </header>
          <div className="flex-grid">
            <div className="login-half left">
              <div className="login-area">
                <form
                  className="login-form top-label-form"
                  id="login-login-form"
                  action="/login"
                  method="post"
                  // onSubmit={}
                >
                  <div id="login-email" className="field">
                    <label htmlFor="login-email-field">Username or Email</label>
                    <input
                      type="text"
                      name="email"
                      id="login-email-field"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required="required"
                    />
                  </div>
                  <div id="login-password" className="field">
                    <label htmlFor="login-password-field">Password</label>
                    <input
                      type="password"
                      name="password"
                      required=""
                      id="login-password-field"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="hidden"
                      id="login-type"
                      name="login-type"
                      value="fullpage"
                    />
                  </div>
                  <div id="login-error"></div>
                  <div>
                    <button
                      id="log-in-button"
                      className="recaptcha-trigger-button button green action-button expand-right"
                    >
                      <span className="label">Sign Up</span>
                      <span className="spinner"></span>
                    </button>
                    &nbsp;&nbsp;
                  </div>
                </form>
                <form
                  className="module login-form top-label-form"
                  id="forgot-password-form"
                  action="#0"
                >
                  <h3>Reset Your Password</h3>
                  <div className="field">
                    <label htmlFor="forgot-email">Username Or Email</label>
                    <input
                      type="text"
                      id="forgot-email"
                      name="forgot-email"
                      placeholder="your@email.com"
                      required=""
                    />
                  </div>
                  <div className="field">
                    <input
                      id="forgot-email-btn"
                      type="submit"
                      value="Send Password Reset Email"
                      className="button button-medium button-fullwidth"
                    />
                  </div>
                  <div id="sent-message">
                    <div id="sent-message-message"></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="login-divider">
              <div className="bar bar-top"></div>
              <span className="login-or">OR</span>
              <div className="bar bar-bottom"></div>
            </div>
            <div className="login-half right">
              <div
                className="module social-auth-errors"
                id="login-social-auth-errors"
              ></div>
              <div className="login-social-buttons">
                <form action="/auth/github" method="post">
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="lE7Ig8Z5A/fOEwYzBjPQ77SvPpbzgyXRhPWdmZG4esbp6DfMYFDPenM7BLwtDWSfSmZQn3FhetUchNO3BHvHSQ=="
                    autoComplete="off"
                  />
                  <button
                    id="login-with-github"
                    type="submit"
                    data-network="Github"
                    className="button github-button social-account-button button-fullwidth"
                  >
                    <svg
                      className="icon-github"
                      viewBox="0 0 250 243.83"
                      width="26"
                      height="26"
                    >
                      <path
                        d="M125,3a125,125,0,0,0-39.5,243.61c6.25,1.15,8.53-2.71,8.53-6,0-3-.11-10.83-0.17-21.26-34.77,7.55-42.11-16.76-42.11-16.76-5.68-14.44-13.88-18.28-13.88-18.28-11.35-7.76.86-7.6,0.86-7.6,12.54,0.88,19.15,12.88,19.15,12.88C69,208.67,87.13,203.16,94.25,200c1.14-8.08,4.36-13.59,7.94-16.71-27.76-3.15-56.94-13.88-56.94-61.78A48.32,48.32,0,0,1,58.11,87.92c-1.29-3.16-5.57-15.87,1.23-33.08,0,0,10.5-3.36,34.37,12.81a118.48,118.48,0,0,1,62.59,0c23.86-16.18,34.34-12.81,34.34-12.81,6.82,17.21,2.53,29.92,1.24,33.08a48.24,48.24,0,0,1,12.85,33.54c0,48-29.23,58.59-57.07,61.68,4.49,3.86,8.49,11.49,8.49,23.15,0,16.71-.15,30.19-0.15,34.29,0,3.34,2.25,7.23,8.6,6A125,125,0,0,0,125,3Z"
                        transform="translate(0 -3)"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <span>Sign Up with GitHub</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="signup-callout">
            Already have an account?{" "}
            <a href="/accounts/signup/user/free">Log In now!</a>
          </div>
        </div>
        <div id="popup-overlay" className="overlay popup-overlay"></div>
        <div id="modal-overlay" className="overlay modal-overlay"></div>
      </div>
    </>
  );
};

export default Login;
