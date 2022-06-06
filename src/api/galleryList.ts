import { Gallery } from "./../interfaces/album";

import { useEffect, useState } from "react";

export const UseAGallery: () => Gallery[] = () => {
  const [gallery, setGallery] = useState<Gallery[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data: Gallery[]) => {
        setGallery(
          data.map(({ id, url, title }) => ({
            id,
            url,
            title,
          }))
        );
      });
  }, []);

  return gallery;
};
