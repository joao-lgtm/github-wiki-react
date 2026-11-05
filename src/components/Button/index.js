import React from 'react';

import { ButtonContainer } from './styles';

function Button({ onClick, type = 'button', loading = false }) {
  return (
    <ButtonContainer type={type} onClick={onClick} disabled={loading}>
      {loading ? 'Buscando...' : 'Buscar'}
    </ButtonContainer>
  );
}

export default Button;
