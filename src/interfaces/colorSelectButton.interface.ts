import React from 'react';

export interface ColorSelectButtonProps {
  onLogoColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logoColor: string;
}
