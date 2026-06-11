import clsx from 'clsx';
import { useState } from 'react';

import { fetchArticlesWithTopic } from './article-api';
import ArticleList from './ArticleList/ArticleList';
import SearchForm from './SearchForm/SearchForm';
import Loader from './Loader/Loader';
import Error from './Error/Error';

function Lesson_07({ hidden = false }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      seterror(false);
      setArticles([]);
      
      const data = await fetchArticlesWithTopic(query);
      // console.log(data);
      setArticles(data.hits);
    } catch (error) {
      console.error('Error fetching articles:', error);
      seterror(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={clsx('lesson-07', { hidden: hidden })}>
      <h1>Lesson_07</h1>
      <hr />
      <SearchForm onSearch={handleSearch} />
      <h2>Latest articles</h2>
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 ? (
        <ArticleList items={articles} />
      ) : (
        <>{!loading && !error && <p>No articles found.</p>}</>
      )}
    </div>
  );
}
export default Lesson_07;
