import React from 'react';

import { formatNumber } from '../../utils/repo';
import { ItemContainer, Top, Avatar, Info, Stats, Actions } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  // Remove só ao clicar no botão (no original, clicar em qualquer parte do card removia)
  const handleRemove = () => handleRemoveRepo(repo.id);

  return (
    <ItemContainer>
      <Top>
        {repo.owner?.avatar_url && (
          <Avatar src={repo.owner.avatar_url} alt={repo.owner.login} width={48} height={48} />
        )}
        <Info>
          <h3>{repo.name}</h3>
          <p className="full-name">{repo.full_name}</p>
        </Info>
      </Top>

      {repo.description && <p className="description">{repo.description}</p>}

      <Stats>
        {repo.language && <span>🟢 {repo.language}</span>}
        <span title="Estrelas">⭐ {formatNumber(repo.stargazers_count)}</span>
        <span title="Forks">🍴 {formatNumber(repo.forks_count)}</span>
        <span title="Issues abertas">❗ {formatNumber(repo.open_issues_count)}</span>
      </Stats>

      <Actions>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório ↗</a>
        <button type="button" className="remover" onClick={handleRemove}>Remover</button>
      </Actions>
    </ItemContainer>
  );
}

export default ItemRepo;
