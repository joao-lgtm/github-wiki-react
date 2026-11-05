import styled from 'styled-components';

export const ItemContainer = styled.article`
  background: #2d333b;
  border: 1px solid #444c56;
  border-radius: 14px;
  padding: 20px;

  .description {
    color: #adbac7;
    font-size: 15px;
    margin-top: 12px;
    line-height: 1.4;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  flex-shrink: 0;
`;

export const Info = styled.div`
  min-width: 0;

  h3 {
    font-size: 22px;
    color: #fafafa;
    overflow-wrap: anywhere;
  }

  .full-name {
    font-size: 14px;
    color: #768390;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 14px;
  font-size: 14px;
  color: #adbac7;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid #444c56;

  a {
    color: #539bf5;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  .remover {
    background: none;
    border: 1px solid #6e2b2b;
    color: #e5534b;
    border-radius: 8px;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 14px;

    &:hover { background: #3d1d20; }
  }
`;
