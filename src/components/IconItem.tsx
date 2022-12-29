import styled from 'styled-components';

import {
  CopyButtonProps,
  SimpleIconProps,
} from '@/interfaces/simpleIcon.interface';
import { convertSvgToDataUrl, getTagStr } from '@/utils/icon.util';
import CopyButton from '@/components/CopyButton';
import ColorSelectButton from './ColorSelectButton';

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const IconButton = styled.button`
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

const Icon = styled.img<{ svg: string }>`
  content: url(${(props): string => convertSvgToDataUrl(props.svg)});

  width: 48px;
  height: 48px;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Title = styled.p`
  margin: 0;
  font-size: 14px;

  padding: 4px 0;
`;

const onClickHandler = async ({
  ...copyButtonProps
}: CopyButtonProps): Promise<void> => {
  await navigator.clipboard.writeText(getTagStr({ ...copyButtonProps }));
};

export default function IconItem({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  return (
    <ItemCard>
      <IconButton onClick={(): Promise<void> => onClickHandler({ title, hex })}>
        <Icon svg={svg} />
        <Title>{title}</Title>
      </IconButton>

      <MenuBar>
        <CopyButton hex={hex} />
        <ColorSelectButton />
      </MenuBar>
    </ItemCard>
  );
}
