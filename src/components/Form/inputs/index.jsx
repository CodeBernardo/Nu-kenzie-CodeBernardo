export const FormInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  handleOnChange,
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
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
      />
    </>
  );
};

export const FormSelect = ({ label, id, value, handleOnChange, children }) => {
  return (
    <>
      <label htmlFor={id} className="text-r">
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      >
        {children}
      </select>
    </>
  );
};
