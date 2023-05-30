import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();

const API = 'https://ecom.loca.lt/products';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    try {
      dispatch({ type: 'SET_LOADING' });
      const res = await axios.get(API);
      const products = res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const getSingleProduct = async (url) => {
    try {
      dispatch({ type: 'SET_SINGLE_LOADING' });
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {!state.isLoading && children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };