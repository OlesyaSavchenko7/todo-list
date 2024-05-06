import { TextField as TextFieldMaterial } from '@mui/material';

interface TextFieldProps {
  placeholder: string;
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: TextFieldProps) => {
  const { value, onChange, placeholder } = props;

  return (
    <TextFieldMaterial
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
};

export default TextField;