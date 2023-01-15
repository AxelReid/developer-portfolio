interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
}

const TextArea: React.FC<Props> = ({
  label,
  className = "",
  ...inputProps
}) => {
  return (
    <div className="relative mt-1">
      {label && (
        <label className="bg c-secondary absolute -top-1.5 left-4 px-1.5 text-sm leading-none">
          {label}
          {/* <div className='absolute w-full h-0.5 left-0 top-[43%] bg -z-[1]' /> */}
        </label>
      )}

      <textarea id="input" className={`w-full ${className}`} {...inputProps} />
    </div>
  );
};

export default TextArea;
