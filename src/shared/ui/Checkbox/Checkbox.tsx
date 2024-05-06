import { FC } from 'react';
import { Checkbox as CheckboxMaterial } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxProps {
  checked: boolean;
  label?: string
  onChange: () => void;
}

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  const { checked, onChange, label } = props;
  return (
    <FormControlLabel
      control={
        <CheckboxMaterial
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  )
};

export default Checkbox;