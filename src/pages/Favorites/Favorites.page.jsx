import React, { useState, useEffect } from 'react';

import VideoList from '../../components/VideoList';

import { getFavoriteList } from '../../utils/services';

import { useDispatch } from '../../components/State';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      dispatch({ type: 'toggleIsLoading', payload: true });
      const response = await getFavoriteList();

      if (response) {
        const { items } = await response.json();
        setData(items);
      }
      dispatch({ type: 'toggleIsLoading', payload: false });
    };

    load();
  }, [dispatch]);

  return <VideoList data={data} />;
};

export default FavoritesPage;
