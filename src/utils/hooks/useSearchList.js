import { useState, useEffect } from 'react';

import { path, key } from './constants/api';

const useSearchList = query => {
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    const getSearchList = async () => {
      try {
        const response = await fetch(`${path}search?part=snippet&type=video&maxResults=24&q=${encodeURIComponent(query)}&key=${key}&videoCaption=closedCaption`);
        const { items } = await response.json();

        setSearchList({ items }.message);
      } catch (error) {
        console.error('Bad request on getSearchList: ', error);
      }
    }

    getSearchList();
  }, []);

  return { searchList };
}

export { useSearchList };