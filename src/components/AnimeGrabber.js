import React, { useState } from 'react';
import axios from 'axios';
import { HeaderForm } from '../styling/componentStyling';

const initialValues = {
  animeName: ''
}

export const AnimeGrabber = () => {
  const [animeSearch, setAnimeSearch] = useState(initialValues)
  const [animeList, setAnimeList] = useState([]);

  const onChange = (evt) => {
    setAnimeSearch({
      ...animeSearch,
      [evt.target.name]: evt.target.value
    })
  };

  const onSubmit = (evt) => {
    evt.preventDefault()
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${animeSearch.animeName}`)
      .then(res => {
        console.log(res.data.results);
        setAnimeList(res.data.results);
        setAnimeSearch(initialValues)
      })
      .catch(err => {
        console.log(err.message);
      })
  } 

  return (
    <>
      <HeaderForm onSubmit={onSubmit}>
        <h1>Anime Watch List</h1>
        <input 
          name='animeName'
          type='text'
          placeholder='Search for an Anime'
          value={animeSearch.animeName}
          onChange={onChange}
        />
        <button>Search</button>
      </HeaderForm>
      {animeList.map(item => {
        return (
          <div key={item.mal_id}>
            <h2>{item.title}</h2>
            <p>{item.synopsis} <a href={item.url}>Read more</a></p>

            <img src={item.image_url} alt={`${item.title} Anime Banner`}/>
          </div>
        )
      })}
    </>
  )
}