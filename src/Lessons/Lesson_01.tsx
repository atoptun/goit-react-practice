import Product from "@components/Product/Product";
import Mailbox from "@components/MailBox/Maibox";
import BookList, { type Book } from "@components/BookList/BookList";


type Lesson_01Props = {
  hidden?: boolean;
};

export default function Lesson_01({hidden = false}: Lesson_01Props) {
  
  const books: Book[] = [
    { id: "id-1", title: "The Great Gatsby" },
    { id: "id-2", title: "To Kill a Mockingbird" },
    { id: "id-3", title: "1984" },
  ];

  const messages: string[] = [
    "React is great!",
    "I love using React for building user interfaces.",
    "React's component-based architecture makes development easier.",
  ];


  return (
    <div className={hidden ? "hidden" : ""}>
      <h1>Lesson 01</h1>

      <h2>Book List</h2>
      <BookList books={books} />

      <h2>Mailbox</h2>
      <Mailbox username="John Doe" messages={messages} />

      <h2>Best selling</h2>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product name="Fries and Burger" price={14.29} />
    </div>
  );
}
