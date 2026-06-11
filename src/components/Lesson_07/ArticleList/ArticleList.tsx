import ArticleItem, { type Article } from '../ArticleItem/ArticleItem';

interface ArticleListProps {
  items: Article[];
}

function ArticleList({ items }: ArticleListProps) {
  return (
    <ul>
      {items.map((article) => (
        <li key={article.objectID}>
          <ArticleItem {...article} />
        </li>
      ))}
    </ul>
  );
}
export default ArticleList;


