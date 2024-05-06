import { Button as MaterialButton } from '@mui/material';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = (props: ButtonProps) => {
  const { onClick, title, disabled } = props;
  return (
    <MaterialButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </MaterialButton>
  )

};

export default Button;