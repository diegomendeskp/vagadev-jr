import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
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
  margin-top: 60px;
  padding: 20px 10px;
  text-align: left;
  position: absolute;
  background: #084154;
  outline: 2px solid #3ec6e0;
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 11px 11px #3ec6e0;
  z-index: 3;
  &:hover {
    display: flex;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    box-shadow: none;
    border-radius: 0;
    padding: none;
    margin-top: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0px 16px;
  text-align: left;
  display: block;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  li:not(:first-child) {
    margin-top: 6px;
    z-index: 1;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
  padding: 10px 10px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
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
  @media (max-width: 500px) {
    font-size: 25px;
    padding: 10px 10px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(90%);
`;

export const Square = styled.div`
  width: 0;
  height: 0;
  border-top: 18px solid #3ec6e0;
  border-left: 18px solid transparent;
  position: absolute;
  transform: rotate(-50deg);
  left: 15px;
  top: -10px;
  z-index: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;
