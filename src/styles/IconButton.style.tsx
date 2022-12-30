import { convertSvgToDataUrl } from '@/utils/icon.util';
import styled from 'styled-components';

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

export const Title = styled.p`
  margin: 0;
  font-size: 14px;

  padding: 4px 0;
`;
