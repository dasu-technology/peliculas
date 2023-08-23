import { useState } from 'react';
import MovieInfo from '@/components/MovieInfo';

interface ProductData {
  title: string;
  description: string;
  variants: {
    edges: {
      node: {
        price: number;
      };
    }[];
  };
  handle: string;
  images: {
    edges: {
      node: any;
    }[];
  };
}

function MovieDetails({ movieData }: { movieData: ProductData }) {
  const [variantPrice, setVariantPrice] = useState<number>(movieData.variants.edges[0].node.price);

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <MovieInfo 
        title={movieData.title}
        description={movieData.description}
        price={variantPrice}
      />
     </div>
  );
}

export default MovieDetails;