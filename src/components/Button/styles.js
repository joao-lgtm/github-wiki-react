import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #347d39;
  color: #ffffff;
  border: 0;
  border-radius: 14px;
  height: 54px;
  padding: 0 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #46954a;
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;
