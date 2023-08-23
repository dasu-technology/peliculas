import ProductListings from '@/components/movieList'
import { IMovie } from '@/interface/IMove';
import { Movie } from '@/model/movie';
import { movieService } from '@/services/movieService';
import { useState, useEffect } from 'react';

interface IndexPageProps {
  products: any[];
}

function IndexPage(): JSX.Element {
  const [products, setData] = useState([]);

  useEffect(() => {
    movieService.getPopular().then(data => setData(data));
}, []);
  

  return (
    <div className="mx-auto max-w-6xl">
      <ProductListings products={products} />      
    </div>
  )
}



export default IndexPage