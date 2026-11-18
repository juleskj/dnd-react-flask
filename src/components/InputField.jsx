export default function InputField({
  type = "text",
  iDhtmlFor,
  inputName,
  labelText,
  inputRequirements,
  pattern,
  required,
  minlength,
  maxlength,
}) {
  return (
    <div className="grid gap-y-2">
      <label htmlFor={iDhtmlFor} className="text-dark-100 text-xl!">
        {labelText}
      </label>
      {inputRequirements && (
        <p className="text-main-100 text-sm!">{inputRequirements}</p>
      )}
      <input
        type={type}
        id={iDhtmlFor}
        name={inputName}
        pattern={pattern}
        maxlength={maxlength}
        minlength={minlength}
        required={required}
        className="h-10 bg-light-100 w-full rounded-3xl border-2 border-main-100 text-main-400 p-3"
      />
    </div>
  );
}
