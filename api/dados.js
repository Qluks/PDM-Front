import useSWR from 'swr';
import { fetchDados } from './anime';

export const useDados = () => {
  const { data, error, mutate } = useSWR('dados', fetchDados);

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};