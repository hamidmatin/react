import * as actionTypes from "./CartActionTypes";
import { v4 as uuid} from "uuid";

export const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      return [
        ...state,
        {
          id: uuid(),
          name: action.product.name,
          price: action.product.price,
        },
      ];
    case actionTypes.REMOVE_CART:
      break;

    default:
      return state;
  }
};
