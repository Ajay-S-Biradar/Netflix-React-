import { API_OPTIONS } from "../utils/contants";

const useGetVideo = async (props) => {
    console.log(props);
        const data =await fetch(`
        https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json?.results.filter((x)=>{
            return x.type==="Trailer"
        });

        props.setTrailer("https://www.youtube.com/embed/"+filterData[0].key+"?&autoplay=1&mute=1&controls=0&loop=1");
}

export default useGetVideo;