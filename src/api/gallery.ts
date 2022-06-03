export const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
    response.json()
  );
