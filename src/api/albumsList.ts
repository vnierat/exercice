import { Album } from "../interfaces";

import { useEffect, useState } from "react";

export const UseAlbums: () => Album[] = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data: Album[]) => {
        setAlbums(
          data.map(({ id, userId, title }) => ({
            id,
            userId,
            title,
          }))
        );
      });
  }, []);

  return albums;
};
