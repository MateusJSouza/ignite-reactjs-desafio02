import { useEffect, useState } from 'react';
import { GenreResponseProps, MovieProps } from '../App';
import { api } from '../services/api';
import './styles/content.scss';


export function Content() {

  function setSelectedGenre() {
    return useState(0);
  }

  function setMovies() {
    return useState(0);
  }

  function setGenres() {
    return useState(0);
  }
  // Complete aqui
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);
}