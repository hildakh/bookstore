import { Book } from "@/hooks/useBooks";

interface Props {
  book: Book,
}

export default function Card({ book }: Props) {
  return (
    <div
      className="bg-background border border-primary/10 rounded-xl p-6 shadow-sm"
    >
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.price}</p>
    </div>
  );
};