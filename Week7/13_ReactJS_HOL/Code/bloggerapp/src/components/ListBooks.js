const books = [
  { id: 1, title: "React for Beginners" },
  { id: 2, title: "Advanced React" },
  { id: 3, title: "React with Hooks" }
];

function ListBooks() {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default ListBooks;
