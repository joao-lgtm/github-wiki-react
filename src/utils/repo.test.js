import { parseRepoInput, removeRepo, addRepo, errorMessage } from './repo';

describe('parseRepoInput', () => {
  test.each([
    ['facebook/react', 'facebook/react'],
    ['  facebook/react  ', 'facebook/react'],
    ['https://github.com/facebook/react', 'facebook/react'],
    ['github.com/facebook/react/', 'facebook/react'],
    ['https://github.com/vercel/next.js.git', 'vercel/next.js'],
  ])('%s → %s', (input, expected) => expect(parseRepoInput(input)).toBe(expected));

  test.each(['', 'react', '/react', 'a b/c'])('inválido: "%s"', (input) =>
    expect(parseRepoInput(input)).toBeNull());
});

test('removeRepo remove pelo id com filter', () => {
  const repos = [{ id: 1 }, { id: 2 }, { id: 3 }];
  expect(removeRepo(repos, 2)).toEqual([{ id: 1 }, { id: 3 }]);
  expect(repos).toHaveLength(3); // não muta o original
});

test('addRepo não duplica e adiciona no topo', () => {
  const repos = [{ id: 1 }];
  expect(addRepo(repos, { id: 1 })).toBe(repos);
  expect(addRepo(repos, { id: 2 })).toEqual([{ id: 2 }, { id: 1 }]);
});

test('errorMessage', () => {
  expect(errorMessage({ response: { status: 404 } })).toMatch(/não encontrado/);
  expect(errorMessage({ response: { status: 403 } })).toMatch(/Limite/);
  expect(errorMessage({})).toMatch(/conexão/);
});
