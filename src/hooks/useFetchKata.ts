import { useState, useEffect } from 'react';
import { KataAPI } from '../api';
import { KataInterface } from '../types/kata';
import useTypedSelector from './useTypedSelector';

export function useFetchKata(id: string): [KataInterface | null, boolean, boolean] {
  const { katasByID } = useTypedSelector((state) => state.katas);
  const [kata, setKata] = useState<KataInterface | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      if (katasByID && katasByID[id]) setKata(katasByID[id]);
      else {
        setIsLoading(true);
        KataAPI.getOne(id)
          .then((kata) => setKata(kata))
          .catch(() => setError(true))
          .finally(() => setIsLoading(false));
      }
    }
  }, [id, katasByID]);

  return [kata, error, isLoading];
}
