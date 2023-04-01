interface Props {
  size?: "small" | "middle";
  loading: boolean;
  checked: boolean;
  onChange: (val: boolean) => void;
  label?: string;
}

const Switcher: React.FC<Props> = ({
  loading,
  checked,
  onChange,
  label,
  size = "middle",
}) => {
  return (
    <label
      className={`relative inline-flex cursor-pointer items-center ${
        loading ? "opacity-50" : ""
      }`}
    >
      <input
        disabled={loading}
        type="checkbox"
        checked={checked}
        className="peer sr-only"
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={`peer relative rounded-full bg-zinc-200 after:absolute after:top-[2px] after:left-[2px] after:rounded-full after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full dark:bg-zinc-700 ${
          size === "small"
            ? "h-4 w-7 after:h-3 after:w-3"
            : "h-5 w-9 after:h-4 after:w-4"
        }`}
      ></div>
      {label && <span className="ml-3 text-sm font-medium">{label}</span>}
    </label>
  );
};

export default Switcher;
