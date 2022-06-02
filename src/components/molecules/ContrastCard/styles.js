import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  gap: 30px 30px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px 30px;
  align-content: center;
`;

export const P = styled.p`
  align-items: flex-end;
  justify-content: flex-start;
  align-content: flex-end;
  display: flex;
  flex-direction: row;
  color: #084154;
  gap: 15px;
`;

export const Square = styled.img`
  width: 18px;
  height: 18px;
`;

export const ShopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
