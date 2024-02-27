import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
import Loader from "./Loader";

const Hero = () => {
  //store 'da tutulan verilere eriş
  const store = useSelector((store) => store.movieReducer);

  //0-20 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  //rastgele üretilen sıradki filme eriş

  const randomMovie = store.popularMovies[i];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10 ">
      {!randomMovie ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB: </span>
              <span className="text-green-500">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-yellow-500 rounded hover:bg-red-700">
                Film İzle
              </button>
              <button className="p-2 bg-blue-500 rounded hover:bg-red-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="my-4 img-fluid object-contain rounded hero-img max-h-[300px] "
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
