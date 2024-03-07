import axios from 'axios';

const baseURL = 'https://api.fbi.gov/wanted/v1';

const FBI = {};

FBI.getFugitives = async (params) => {
  try {
    const response = await axios.get(`${baseURL}/list`, { params });
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de fugitivos:', error);
  }
};

FBI.getFugitiveInfo = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/@wanted-person/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el fugitivo:', error);
  }
};

export default FBI;
