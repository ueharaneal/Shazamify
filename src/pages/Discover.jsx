/* eslint-disable quotes */
import  {useDispatch, useSelector } from 'react-redux '
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state)=> state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading Songs..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className=" flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 text-sm p-3 rounded-lg outline-none mt-5 sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
           ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard 
            key={song.key} 
            song={song} 
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
           />
        ))}
      </div>
    </div>
  );
};

export default Discover;
