import React from 'react';
import Styled from 'styled-components';

const Layout = ({ children, data }) => (
  <SiteWrapper>
    <div className="terminal">
      <div className="terminal-header">emilius@maximus: ~</div>
      <div className="terminal-menu">
      <div className="item">File</div>
      <div className="item">Edit</div>
      <div className="item">View</div>
      <div className="item">Search</div>
      <div className="item">Terminal</div>
      <div className="item">Help</div>
      </div>
      <div className="terminal-body">
        <span className="terminal-text-user">DevOps@Utrecht</span>:<span className="tilde">~</span>$ 
        <input type="text" className="command-input"/>
        <div className="scrollbar"></div>
      </div>
    </div>
  </SiteWrapper>
);


const SiteWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  width: 99vw;
  background: url('https://www.omgubuntu.co.uk/wp-content/uploads/2018/03/ubuntu-18.04-default-wallpaper-2.jpg') no-repeat center center fixed;
  background-size: cover;
  .terminal {
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: "Ubuntu";
    font-size: 14px;
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(0,0,0,0.8) 0 0 35px -5px;
    .terminal-header {
      height: 20px;
      background: #494948;
      color: #dfdbd2;
      border-radius: inherit;
      text-align: center;
      padding-top: 5px;
      font-weight: bold;
    }
    .terminal-menu {
      height: 20px;
      background: #494948;
      color: #dfdbd2;
      display: flex;
      padding-bottom: 5px;
      .item {
        margin: 5px;
      }
    }
    .terminal-body {
      @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');
      font-family: "Ubuntu Mono";
      height: 450px;
      width: 800px;
      background: #350b24;
      color: white;
      opacity: 0.90;
      padding: 1px;
      position: relative;
      display: flex;
      .terminal-text-user {
        font-weight: 900;
        color: #8ae234;
      }
      .tilde {
        color: #719ccc;
      }
      .command-input {
        margin-left: 5px;
        background: inherit;
        border: none;
        caret-color: white;
        flex-grow: 100;
        height: 12px;
        color: white;
        font-family: inherit;
        &:focus {
          outline: none;
        }
      }
      .scrollbar {
        width: 4px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        background-color: #ca613f;
        &:hover {
          width: 8px;
        }
      }
    }
  }
`


export default Layout;