export type Book = {
  id: string;
  title: string;
};

type BookProps = Omit<Book, "id">;

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </ul>
  );
};

function Book({ title }: BookProps) {
  return <li>{title}</li>;
};

