
import './form-input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const FormInput: React.FC<Props> = ({ ...rest }) => {
  return (
    <input
      className="form-input"
      type="text"
      {...rest}
    />
  );
};

