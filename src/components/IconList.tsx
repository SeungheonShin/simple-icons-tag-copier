import IconItem from '@/components/IconItem';
import { SimpleIconProps } from '@/interfaces/simpleIcon.interface';
import styled from 'styled-components';

const IconListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  row-gap: 16px;
  column-gap: 16px;

  margin: 0 auto;
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
