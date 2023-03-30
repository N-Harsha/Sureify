import { useState } from "react";
import "./FormInput.css";
const FormInput = (props) => {
  const { type, label, onChange, errorMessage, ...inputOptions } = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      {type === "select" ? (
        <select onChange={onChange}>
          {inputOptions.options.map((item, i) => (
            <option value={item.value} key={i}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          onBlur={handleFocus}
          {...inputOptions}
          onChange={onChange}
          type={type}
          focused={focused.toString()}
        ></input>
      )}
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
