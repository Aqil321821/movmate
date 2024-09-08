import { Card } from '../components/Card';

import { useFetch } from '../hooks/useFetch';

export const MovieList = ({api}) => {
  const {data :  movies} = useFetch(api);

  return (
    <main>
      <section className='py-7 mx-auto max-w-7xl'>
        <div className='flex justify-center flex-wrap  other:justify-evenly'>
          {movies.map((movie) => (
            // console.log(movie);
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
