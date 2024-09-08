import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';

import { useFetch } from '../hooks/useFetch';

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');

  const { data: movies } = useFetch(api,queryTerm);

  return (
    <main>
      <section className='py-2'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length===0 ? `No Results Found For '${queryTerm}'` : `Results For '${queryTerm}' `}</p>
        <div className='flex justify-center flex-wrap'>
          {movies.map((movie) => (
            // console.log(movie);
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
