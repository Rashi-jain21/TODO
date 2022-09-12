import {
  ADD_TO_LIST,
  CLEAR_LIST,
  DELETE_FROM_LIST,
  EDIT_ITEM_IN_LIST,
} from './actions';

const initialState = {
  todos: [],
};

// Use the initialState as a default value
export default function reducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CLEAR_LIST:
      return {...initialState};
    case DELETE_FROM_LIST: {
      const newTodos = state.todos.filter(
        item => item.id !== action.payload.id,
      );
      return {
        state,
        todos: [...newTodos],
      };
    }
    case EDIT_ITEM_IN_LIST: {
      const itemIndex = state.todos.findIndex(
        item => item.id === action.payload.newItem.id,
      );
      console.log(
        '🚀 ~ file: reducer.js ~ line 38 ~ reducer ~ action.payload.newItem',
        [...state.todos.splice(itemIndex, 1, {...action.payload.newItem})],
      );
      return {
        state,
        todos: [
          ...state.todos.splice(itemIndex, 1, {...action.payload.newItem}),
        ],
      };
    }
    default:
      return state;
  }
}
