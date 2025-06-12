import { Book } from '@/hooks/useBooks';

interface Props {
  book: Book
}

export default function Card({ book }: Props) {
  return (
    <div className="bg-background border border-primary/10 rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-200">
      <h3 className="text-xl font-bold text-foreground/90 mb-3
                     line-clamp-2">
        {book.title}
      </h3>

      <p className="text-foreground/70 mb-4 font-md">
        {book.author}
      </p>

      <div className="inline-block bg-primary/10 text-primary
                      px-3 py-1 rounded-full">
        <span className="font-semibold">
          ${book.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}