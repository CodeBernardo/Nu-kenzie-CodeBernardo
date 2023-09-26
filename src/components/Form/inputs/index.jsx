export const FormInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <>
      <label htmlFor={id} className="text-r">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="head-line"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  );
};

export const FormSelect = ({ children, label, id, value, setValue }) => {
  return (
    <>
      <label htmlFor={id} className="text-r">
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}>
        {children}
      </select>
    </>
  );
};
