// Aceita "owner/repo", "https://github.com/owner/repo", "github.com/owner/repo.git" etc.
export const parseRepoInput = (input) => {
  if (!input) return null;
  const cleaned = input
    .trim()
    .replace(/^(https?:\/\/)?(www\.)?github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/\/+$/, '');

  const [owner, name] = cleaned.split('/');
  const valid = /^[\w.-]+$/;
  if (!owner || !name || !valid.test(owner) || !valid.test(name)) return null;
  return `${owner}/${name}`;
};

// Remove pelo id usando filter (proposta de desafio da aula)
export const removeRepo = (repos, id) => repos.filter((repo) => repo.id !== id);

export const addRepo = (repos, repo) =>
  repos.some((r) => r.id === repo.id) ? repos : [repo, ...repos];

// Guarda só os campos que a interface usa
export const pickRepoFields = (data) => ({
  id: data.id,
  name: data.name,
  full_name: data.full_name,
  html_url: data.html_url,
  description: data.description,
  language: data.language,
  stargazers_count: data.stargazers_count,
  forks_count: data.forks_count,
  open_issues_count: data.open_issues_count,
  updated_at: data.updated_at,
  owner: { login: data.owner?.login, avatar_url: data.owner?.avatar_url },
});

export const formatNumber = (n) =>
  new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 }).format(n || 0);

export const errorMessage = (error) => {
  const status = error?.response?.status;
  if (status === 404) return 'Repositório não encontrado.';
  if (status === 403) return 'Limite de requisições da API do GitHub atingido. Tente mais tarde.';
  if (!error?.response) return 'Falha de conexão. Verifique sua internet.';
  return 'Erro ao buscar repositório.';
};
