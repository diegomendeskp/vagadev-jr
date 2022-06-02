import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  float: none;
`;
export const Button = styled.button`
  display: flex;
  font-size: 20px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  width: 25px;
  margin: 0;
  cursor: pointer;
  &:hover + Div {
    display: flex;
  }
`;
export const Div = styled.div`
  display: none;
  margin-top: 40px;
  padding: 20px 10px;
  text-align: left;
  position: absolute;
  background: #084154;
  outline: 2px solid #3ec6e0;
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 11px 11px #3ec6e0;
  z-index: 1;
  &::after {
  }
  &:hover {
    display: flex;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0px 16px;
  text-align: left;
  display: block;
  li:not(:first-child) {
    margin-top: 6px;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  padding: 8px 25px;

  &:hover {
    background-color: #3ec6e0;
    border-radius: 5px;
  }
`;

export const Span = styled.span`
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
`;
