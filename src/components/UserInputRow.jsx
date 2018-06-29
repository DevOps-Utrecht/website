import React from 'react';
import Styled from 'styled-components';

const UserInputRow = (props) => {
  return (
    <UserInputRowWrapper>
      <span className="terminal-text-user">devops@utrecht</span>:<span className="tilde">~</span>$ 
      <input type="text" className="user-input" onKeyPress={e => props.handleUserInputKeyPress(e)} onChange={(e) => props.handleUserInputChange(e)} value={props.value}/>
    </UserInputRowWrapper>
  );
};

const UserInputRowWrapper = Styled.div`
  display: flex;
  .terminal-text-user {
    font-weight: 900;
    color: #8ae234;
  }
  .tilde {
    color: #719ccc;
  }
  .user-input {
    margin-left: 5px;
    background: inherit;
    border: none;
    caret-color: white;
    height: 14px;
    font-size: inherit;
    color: white;
    font-family: inherit;
    flex-grow: 100;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: white;
    }
  }
`

export default UserInputRow;