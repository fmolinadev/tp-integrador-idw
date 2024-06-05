// src/components/Textarea.jsx
import React from 'react';

const Textarea = ({ name, cols, rows, placeholder, required, className }) => {
  return (
    <textarea
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      required={required}
      className={className}
    ></textarea>
  );
};

export default Textarea;

