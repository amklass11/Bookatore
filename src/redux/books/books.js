import { addBookApi, getBookApi, removeBookApi } from '../../Api/booksApi';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const book = { ...payload, item_id: payload.id };
  await addBookApi(book);
  dispatch({ type: ADD_BOOK, book });
};

export const removeBook = (id) => async (dispatch) => {
  await removeBookApi(id);
  dispatch({ type: REMOVE_BOOK, id });
};

export const getBook = () => async (dispatch) => {
  const data = await getBookApi();
  const books = Object.keys(data).map((id) => {
    const book = data[id][0];
    book.id = id;
    return book;
  });
  dispatch({ type: GET_BOOK, books });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [...state].filter((book) => book.id !== action.id);

    case GET_BOOK:
      return action.books;

    default:
      return state;
  }
};

export default reducer;
