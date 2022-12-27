import IconItem from '@/components/IconItem';
import { SimpleIconProps } from '@/interfaces/simpleIconProps.interface';
import styled from 'styled-components';

const IconListGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  row-gap: 10px;
`;

export default function IconList({
  icons,
}: {
  icons: SimpleIconProps[];
}): JSX.Element {
  return (
    <IconListGrid>
      {icons.map((props: SimpleIconProps) => (
        <IconItem {...props} key={props.title} />
      ))}
    </IconListGrid>
  );
}
