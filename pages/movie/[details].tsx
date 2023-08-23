import MovieSection from '@/components/movieSection';
import { movieService } from '@/services/movieService';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';


async function MoviePage(): Promise<JSX.Element> {
  const router = useRouter()
  
  const { details } = router.query
  const [movieData, setmovieData] = useState([]);

  useEffect(() => {
    movieService.getDetalles(details).then(data => setmovieData(data));
}, []);
  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
       <h1>Perfil de {details}</h1>
      { <MovieSection movieData={movieData} />  }
     </div>
  );
}



export default MoviePage