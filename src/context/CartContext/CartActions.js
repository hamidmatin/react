import * as actionTypes from "./CartActionTypes";

export const addCart = (product) => {
  return {
    type: actionTypes.ADD_CART,
    product,
  };
};
export const deleteCart = (id) => {
  return {
    type: actionTypes.ADD_CART,
    id,
  };
};
