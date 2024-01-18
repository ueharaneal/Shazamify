import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
  // Define a default country code
  const DEFAULT_COUNTRY_CODE = 'US';
  
  const [country, setCountry] = useState(DEFAULT_COUNTRY_CODE);
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    if (country === DEFAULT_COUNTRY_CODE) {
      axios
        .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
        .then((res) => {
          const fetchedCountry = res?.data?.location.country;
          if (fetchedCountry) {
            setCountry(fetchedCountry);
          } // If fetchedCountry is undefined or empty, the state remains at default value.
        })
        .catch((err) => {
          console.log(err);
          // Optionally handle the error, e.g., show an error message.
          // The country state will remain at the default value.
        })
        .finally(() => setLoading(false));
    } else {
      // If the country is not the default (i.e., it's already set), we don't need to load again.
      setLoading(false);
    }
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around The <span className="font-bold">{country}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;

