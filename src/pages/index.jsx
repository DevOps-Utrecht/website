import React, { Component } from 'react';
import Styled from 'styled-components';
import UserInputRow from '../components/UserInputRow';
import Result from '../components/Result';


class IndexPage extends React.Component {
  render() {
    return(
      <SiteWrapper>
        <div className="terminal">
          <div className="terminal-header">devops@utrecht: ~</div>
          <div className="terminal-menu">
            <div className="item">File</div>
            <div className="item">Edit</div>
            <div className="item">View</div>
            <div className="item">Search</div>
            <div className="item">Terminal</div>
            <div className="item">Help</div>
          </div>
          <div className="terminal-body">
            <div className="scrollbar"></div>
            <Result />
          </div>
        </div>
      </SiteWrapper>
    )
  }
};


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
      font-size: 16px;
      height: 450px;
      width: 800px;
      background: #350b24;
      color: white;
      opacity: 0.90;
      padding: 1px;
      position: relative;
    }
    .result {
      .result-item {
        display: inline-block;
        margin-right: 25px;
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
`


export default IndexPage
