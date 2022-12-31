import * as Styles from '@/styles/ColorSelectButton.style';
import { useRef } from 'react';

export default function ColorSelectButton(): JSX.Element {
  const colorInputRef = useRef<HTMLInputElement>(null);

  return (
    <Styles.ButtonBar>
      <Styles.Button>
        <Styles.Circle />
        <Styles.ColorInput ref={colorInputRef} />
      </Styles.Button>
    </Styles.ButtonBar>
  );
}
