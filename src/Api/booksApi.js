const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appID = 'z4RKBwYpW5ixHJZKNyqe';

export const getBookApi = async () => {
  const data = await fetch(`${url}/${appID}/books`)
    .then((response) => response.json());
  return data;
};

export const addBookApi = async (book) => {
  await fetch(`${url}/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((response) => response.text());
};

export const removeBookApi = async (id) => {
  await fetch(`${url}/${appID}/books/${id}`, {
    method: 'DELETE',
  }).then((response) => response.text());
};
