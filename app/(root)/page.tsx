import StartupCard, {StartupCardType} from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';



export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search: query || null}

  const posts = await client.fetch(STARTUPS_QUERY, params);

  return (
    <>
      {/* Hero section */}
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className='!max-w-3xl sub-heading'>
          Submit Ideas, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0
            ? posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
            : ''}
        </ul>
      </section>
    </>
  );
}
