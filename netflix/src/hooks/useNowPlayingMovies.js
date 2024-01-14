import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        nowPlayingMovies();
      },[]);
    
      const nowPlayingMovies =async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
}

export default useNowPlayingMovies

