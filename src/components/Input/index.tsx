interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

const Input: React.FC<Props> = ({ label, className = "", ...inputProps }) => {
  return (
    <div className="relative mt-1">
      {label && (
        <label className="bg c-secondary absolute -top-1.5 left-4 px-1.5 text-sm leading-none">
          {label}
        </label>
      )}
      <input id="input" className={`w-full ${className}`} {...inputProps} />
    </div>
  );
};

export default Input;
