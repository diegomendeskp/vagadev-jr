import styled from 'styled-components';
import { arrows } from 'react-slideshow-image';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  display: block;
  z-index: 0;
`;

export const Img = styled.img`
  width: 100%;
  display: flex;
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

export const Div = styled.div`
  position: relative;
  bottom: 10px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const P = styled.p`
  position: absolute;
  display: flex;
  z-index: 9;
  color: #ffffff;
  bottom: 180px;
  right: 300px;
  width: 400px;
  height: 100px;
  font-size: 15px;
  text-align: end;
  line-height: 155%;
`;

export const Title = styled.p`
  position: absolute;
  color: #ffffff;
  bottom: 340px;
  right: 300px;
  font-size: 40px;
  font-weight: bold;
`;

export const Price = styled.span`
  position: absolute;
  color: #3ec6e0;
  bottom: 280px;
  right: 330px;
  font-size: 60px;
  font-weight: bold;
`;
export const Price2 = styled.span`
  position: absolute;
  color: #3ec6e0;
  bottom: 315px;
  right: 300px;
  font-size: 20px;
  font-weight: bold;
`;
export const BoxArrow = styled.div`
  position: absolute;
  background: #3ec6e0;
  bottom: 110px;
  right: 0px;
  width: 40px;
  height: 280px;
  z-index: 2;
  border-radius: 0px 0px 0px 10px;
`;
export const SubTitleOne = styled.p`
  position: absolute;
  display: flex;
  color: #ffffff;
  bottom: 300px;
  right: -45px;
  font-size: 15px;
  transform: rotate(90deg);
  z-index: 7;
`;
export const SubTitleTwo = styled.p`
  position: absolute;
  display: flex;
  color: #ffffff;
  bottom: 300px;
  right: -25px;
  font-size: 15px;
  transform: rotate(90deg);
  z-index: 6;
`;
export const Number = styled.p`
  position: absolute;
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  bottom: 110px;
  right: 0px;
  background: #084154;
  width: 40px;
  height: 70px;
  font-size: 15px;
  z-index: 6;
  border-radius: 0px 0px 0px 10px;
`;