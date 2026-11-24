export default function InputField({
  onChange,
  type = "text",
  iDhtmlFor,
  inputName,
  labelText,
  inputRequirements,
  pattern,
  required,
  minlength,
  maxlength,
  value,
  color = "light",
  placeholder,
}) {
  const colors = {
    light: {
      text: "text-light-100",
      border: "border-main-100",
      requirments: "text-main-100",
    },
    dark: {
      text: "text-dark-100",
      border: "border-main-300",
      requirments: "text-main-200",
    },
  };

  return (
    <div className="grid gap-y-2">
      <label htmlFor={iDhtmlFor} className={`${colors[color].text} text-xl!`}>
        {labelText}
      </label>
      {inputRequirements && (
        <p className={`${colors[color].requirments} text-sm!`}>
          {inputRequirements}
        </p>
      )}
      <input
        type={type}
        id={iDhtmlFor}
        name={inputName}
        pattern={pattern}
        maxlength={maxlength}
        minlength={minlength}
        required={required}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`h-10 bg-light-100 w-full rounded-3xl border-2 ${colors[color].border} text-main-400 p-3`}
      />
    </div>
  );
}
