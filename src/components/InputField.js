import React, { useState } from "react";
import "../components/Css/InputField.css";
import { FaChevronDown } from "react-icons/fa";

const InputField = ({ placeholder, fieldName, type, dob }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor="input-field" className="input-label">
        {fieldName}
      </label>
      <div className="input-wrapper">
        <input
          id="input-field"
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="input-field"
        />
        {dob && (
          <div className="chevron-icon">
            <FaChevronDown size={16} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
