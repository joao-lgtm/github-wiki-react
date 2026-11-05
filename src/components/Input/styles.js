import styled from 'styled-components';

export const InputContainer = styled.div`
  flex: 1;
  border: 1px solid #444c56;
  border-radius: 14px;
  background: #2d333b;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #539bf5;
  }

  input {
    background: transparent;
    border: 0;
    outline: 0;
    width: 100%;
    height: 54px;
    padding: 0 18px;
    color: #ffffff;
    font-size: 18px;

    &::placeholder { color: #768390; }
  }
`;
