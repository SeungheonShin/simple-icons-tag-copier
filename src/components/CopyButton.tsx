import { CopyButtonProps } from '@/interfaces/simpleIconProps.interface';
import { getTagStr } from '@/utils/icon.util';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  width: 75px;
  height: 36px;
  p {
    margin: 0;
  }
`;

const onClickHandler = async ({
  ...copyButtonProps
}: CopyButtonProps): Promise<void> => {
  await navigator.clipboard.writeText(getTagStr({ ...copyButtonProps }));
};

export default function CopyButton({
  title,
  hex,
}: CopyButtonProps): JSX.Element {
  return (
    <Button onClick={(): Promise<void> => onClickHandler({ title, hex })}>
      <p>#{hex}</p>
    </Button>
  );
}
