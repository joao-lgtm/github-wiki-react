import styled, { css } from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 24px;
`;

export const Logo = styled.div`
  font-size: 56px;
  line-height: 1;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 8px;
`;

export const Subtitle = styled.p`
  color: #adbac7;
  margin-top: 4px;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const Message = styled.p`
  margin-top: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;

  ${({ $type }) =>
    $type === 'error'
      ? css`background: #3d1d20; color: #ff938a; border: 1px solid #6e2b2b;`
      : css`background: #1d2d3d; color: #8ac7ff; border: 1px solid #2b4a6e;`}
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  color: #adbac7;
  font-size: 14px;

  button {
    background: none;
    border: 0;
    color: #e5534b;
    cursor: pointer;
    font-size: 14px;

    &:hover { text-decoration: underline; }
  }
`;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

export const Empty = styled.p`
  text-align: center;
  color: #768390;
  margin-top: 32px;
`;
