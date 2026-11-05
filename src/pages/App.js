import { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  parseRepoInput, addRepo, removeRepo, pickRepoFields, errorMessage,
} from '../utils/repo';

import {
  Container, Header, Logo, Title, Subtitle, SearchForm, Message, List, Empty, Toolbar,
} from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useLocalStorage('@github-wiki:repos', []);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { type: 'error' | 'info', text }

  const handleSearchRepo = async (e) => {
    e?.preventDefault();
    setMessage(null);

    const fullName = parseRepoInput(currentRepo);
    if (!fullName) {
      setMessage({ type: 'error', text: 'Use o formato usuario/repositorio ou cole a URL do GitHub.' });
      return;
    }

    if (repos.some((r) => r.full_name.toLowerCase() === fullName.toLowerCase())) {
      setMessage({ type: 'info', text: `${fullName} já está na sua lista.` });
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.get(`repos/${fullName}`);
      setRepos((prev) => addRepo(prev, pickRepoFields(data)));
      setCurrentRepo('');
    } catch (error) {
      setMessage({ type: 'error', text: errorMessage(error) });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => removeRepo(prev, id));
  };

  return (
    <Container>
      <Header>
        <Logo aria-hidden="true">📚</Logo>
        <Title>GitHub Wiki</Title>
        <Subtitle>Monte sua coleção de repositórios favoritos</Subtitle>
      </Header>

      <SearchForm onSubmit={handleSearchRepo}>
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
          placeholder="ex: facebook/react"
          disabled={loading}
        />
        <Button type="submit" loading={loading} />
      </SearchForm>

      {message && <Message $type={message.type} role="alert">{message.text}</Message>}

      {repos.length > 0 && (
        <Toolbar>
          <span>{repos.length} repositório{repos.length > 1 ? 's' : ''}</span>
          <button type="button" onClick={() => setRepos([])}>Limpar tudo</button>
        </Toolbar>
      )}

      <List>
        {repos.length === 0 ? (
          <Empty>Nenhum repositório ainda. Busque um acima para começar.</Empty>
        ) : (
          repos.map((repo) => (
            <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />
          ))
        )}
      </List>
    </Container>
  );
}

export default App;
