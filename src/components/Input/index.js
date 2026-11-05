import React from 'react';

import { InputContainer } from './styles';

function Input({ value, onChange, placeholder, disabled }) {
  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Repositório"
        autoFocus
      />
    </InputContainer>
  );
}

export default Input;
