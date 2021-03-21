import { Button } from "./Button";

import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

type Props = {
  genres: GenreResponseProps[];
  selectedGenre: number;
  handle: (id: number) => void;
}

export function SideBar({genres, selectedGenre, handle}: Props) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handle(genre.id)}
              selected={selectedGenre === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}