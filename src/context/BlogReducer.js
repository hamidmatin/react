import * as actionTypes from "./actions/actionTypes";

export const BlogReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.DELETE_POST:
        const newPosts = [...state.posts];
        const index = newPosts.findIndex((p) => p.id === action.id);
        newPosts.splice(index, 1);
  
        return {
          ...state,
          posts: newPosts,
        };
        
      case actionTypes.ADD_POST:
        break;
        
      default:
        return state;
    }
  };
  