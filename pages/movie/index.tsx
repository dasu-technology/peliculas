import ProductListings from '@/components/movieList'
import { IMovie } from '@/interface/IMove';
import { Movie } from '@/model/movie';
import { movieService } from '@/services/movieService';
import { useState, useEffect } from 'react';

interface IndexPageProps {
  products: any[];
}

function IndexPage(): JSX.Element {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getPopular().then(data => setMovies(data));
}, []);
  

  return (
    <div className="mx-auto max-w-6xl">
      <ProductListings movies={movies} />      
    </div>
  )
}



export default IndexPage