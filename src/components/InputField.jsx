export default function InputField({type="text", iDhtmlFor, inputName, labelText, inputRequirements, pattern, required}) {
    return <div className="grid gap-y-2">
        <label htmlFor={iDhtmlFor} className="text-primary-100 text-xl">{labelText}</label>
        {inputRequirements && <p className="text-secondary-100 text-sm">{inputRequirements}</p>}
        <input type={type} id={iDhtmlFor} name={inputName} pattern={pattern} required={required} className="h-10 bg-primary-100 w-full rounded-3xl border-2 border-secondary-100" />
        </div>
}