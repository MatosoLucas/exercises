import '../styles/content.scss';
import { MovieCard } from './MovieCard';
import { MovieProps } from '../App';

type Props = {
  title: string;
  movies: MovieProps[];
}

export function Content({title, movies}: Props) {

  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
  
}