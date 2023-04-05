import { config, configMultipart } from '../../Config/Config';
import axios from 'axios';

export const addproduct = async (body) => {    
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/products/create/`, body, configMultipart);
    } catch (err) {
        throw err;
    }
};

export const allproducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/`, config);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

export const getCategorys = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/categorys/`, config);
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  export const getStatus = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/status/`, config);
      return res.data;
    } catch (error) {
      throw error;
    }
  };