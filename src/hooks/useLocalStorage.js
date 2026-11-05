import { useEffect, useState } from 'react';

// Persiste o estado no localStorage para a lista sobreviver ao recarregar a página
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignora (modo privado, storage cheio etc.)
    }
  }, [key, value]);

  return [value, setValue];
}
