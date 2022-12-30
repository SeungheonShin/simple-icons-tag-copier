import { convertSvgToDataUrl } from '@/utils/icon.util';
import styled from 'styled-components';

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-top: 10px;

  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  border: none;
`;

export const Icon = styled.img<{ svg: string }>`
  content: url(${(props): string => convertSvgToDataUrl(props.svg)});

  width: 48px;
  height: 48px;
`;

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 14px;

  padding: 4px 0;
`;
