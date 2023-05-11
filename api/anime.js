import axios from "axios";
import useSWR from 'swr';

const API_BASE_URL = "https://parseapi.back4app.com/classes"; // altere para a sua URL de API

export const fetchDados = async () => {
  const response = await axios.get(`${API_BASE_URL}/animes`, {
    headers: {
      "X-Parse-Application-Id": "FrLZPOEsndCW47I6s5FAeQZrasMWHU0LOM9wrEbo",
      "X-Parse-REST-API-Key": "eaPyWYJvM3n9YudfCHQqmlXBVxojtUtz9TYGEtHz",
    },
  });
  return response.data.results;
};

export const useDados = () => {
  const { data, error, mutate } = useSWR('dados', fetchDados, { refreshInterval: 10000 });

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};
