import { ArrowDown } from 'lucide-react';
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a className="swipe">
        <span className="container">
          <ArrowDown />
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .swipe {
    position: relative;
    width: 60px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    cursor: pointer;
  }

  .container {
    position: absolute;
    top: 5px;
    width: 50px;
    height: 50px;
    background: #faf4ec;
    border: 2px solid #7ab5b7;
    border-radius: 3%;
    transition: 0.35s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
  }

  .swipe:hover .container {
    top: calc(100% - 55px);
  }
`;

export default Button;