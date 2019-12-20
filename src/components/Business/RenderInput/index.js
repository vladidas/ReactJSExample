import React from "react";

export const RenderInputClear = ({
   input,
   label,
   placeholder,
   meta: {touched, error, warning}
}) => (
  <>
    {
      label &&
      <label className="label">{label}</label>
    }

    <input {...input}
           type="text"
           className="input"
           placeholder={placeholder || label}
    />

    {
      touched &&
      (
        error &&
        <small className="has-error">{error}</small> ||
        warning && <small>{warning}</small>
      )
    }
  </>
);
