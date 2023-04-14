import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <header className='main-sidebar'>
      <div className='Sidebar_root-GFeJV' style={{ overflow: 'hidden' }}>
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
        <nav
          className='navigation-wrap Sidebar_navigationWrap-COnc6'
          role='navigation'
          style={{ height: '185vh' }}
        >
          <div className='SidebarCreate_root-PNqyr'>
            <Link to='/pen' className='SidebarCreate_anonButton-NtSrZ'>
              <span>Start Coding</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
