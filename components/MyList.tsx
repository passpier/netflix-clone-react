"use client";

import React from "react";
import useFavorites from "@/hooks/useFavorites";
import MovieList from "@/components/MovieList";

const MyList = () => {
  const { data: favorites = [] } = useFavorites();
  return <MovieList title="My List" data={favorites} />;
};

export default MyList;
