import { ColorSelectButtonProps } from '@/interfaces/colorSelectButton.interface';
import * as Styles from '@/styles/ColorSelectButton.style';

export default function ColorSelectButton({
  onLogoColorChange,
  logoColor,
}: ColorSelectButtonProps): JSX.Element {
  return (
    <Styles.ButtonBar>
      <Styles.Button title="select logo color">
        <Styles.Circle color={logoColor} />
        <Styles.ColorInput
          value="#ffffff"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            onLogoColorChange(e)
          }
        />
      </Styles.Button>
    </Styles.ButtonBar>
  );
}
