import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        nowPlayingMovies();
      },[]);
    
      const nowPlayingMovies =async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      }
}

export default usePopularMovies;

