import * as S from "./Button.styles";
import type { ButtonVariant } from "./Button.styles"; 

interface ButtonProps {
  variant?: ButtonVariant;
}



export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <S.ButtonContainer variant={variant}>Enviar</S.ButtonContainer>;
};
