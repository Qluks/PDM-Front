import axios from "axios";
import useSWR from 'swr';




const API_BASE_URL = "https://aos-backend-production-0e13.up.railway.app"; 

export const fetchDadosCatalogoGet = async () => {
  const response = await axios.get(`${API_BASE_URL}/catalogo`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  console.log(response.data);
  return response.data;
};

export const fetchDadosNoticeGet = async () => {
  const response = await axios.get(`${API_BASE_URL}/notice`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  console.log(response.data);
  return response.data;
};

export const fetchDadosFavoritoGet = async () => {
  const response = await axios.get(`${API_BASE_URL}/anime`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  console.log(response.data);
  return response.data;
};

export const fetchDadosUserGet = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  });
  console.log(response.data);
  return response.data;
};

///////////////////////////////////////////////

export const useDadosCatalogoGet = () => {
  const { data, error, mutate } = useSWR('dadosCatalogo', fetchDadosCatalogoGet);

  return {
    dadosCatalogo: data,
    isLoadingCatalogo: !error && !data,
    isErrorCatalogo: error,
    atualizarDados: mutate,
  };
};


export const useDadosNoticeGet = () => {
  const { data, error, mutate } = useSWR('dadosNotice', fetchDadosNoticeGet);

  return {
    dadosNotice: data,
    isLoadingNotice: !error && !data,
    isErrorNotice: error,
    atualizarDados: mutate,
  };
};

export const useDadosFavoritoGet = () => {
  const { data, error, mutate } = useSWR('dadosFavorito', fetchDadosFavoritoGet);

  return {
    useDadosFavorito: data,
    isLoadingFavorito: !error && !data,
    isErrorFavorito: error,
    atualizarDados: mutate,
  };
};

export const useDadosUserGet = () => {
  const { data, error, mutate } = useSWR('dadosUser', fetchDadosUserGet);

  return {
    dadosUser: data,
    isLoadingUser: !error && !data,
    isErrorUser: error,
    atualizarDados: mutate,
  };
};
