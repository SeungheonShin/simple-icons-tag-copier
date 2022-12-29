import styled from 'styled-components';

import { SimpleIconProps } from '@/interfaces/simpleIconProps.interface';
import { convertSvgToDataUrl } from '@/utils/icon.util';
import CopyButton from '@/components/CopyButton';

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img<{ svg: string }>`
  content: url(${(props): string => convertSvgToDataUrl(props.svg)});

  padding-right: 10px;

  width: 48px;
  height: 48px;
`;

const MenuBar = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
`;

const Menu = styled.div``;

const Title = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default function IconItem({
  title,
  hex,
  svg,
}: SimpleIconProps): JSX.Element {
  return (
    <ItemCard>
      <Icon svg={svg} />
      <Title>{title}</Title>
      <MenuBar>
        <Menu>
          <CopyButton hex={hex} title={title} />
        </Menu>
        <Menu>
          <CopyButton hex={hex} title={title} />
        </Menu>
      </MenuBar>
    </ItemCard>
  );
}
