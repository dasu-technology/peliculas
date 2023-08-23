import MovieCard from '@/components/movieCard'
import { IMovie } from '@/interface/IMove';

   

function MovieList({ products }: { products: IMovie[] }): JSX.Element {
    return (
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {
          products.map((product: IMovie, index: number) => (
            <MovieCard  product={product} />
          ))
        }
      </div>
    )
  }
  
  export default MovieList;