"use client";

import { Book, useBooks } from "@/hooks/useBooks";
import { useTranslations } from "next-intl";

const BookList = () => {
  const {books, loading} = useBooks();
  const t = useTranslations('BookList');

  return (
    <div>
      { loading ? (
        <p>{t('loading')}</p>
      ): (
        books.map((book: Book) => (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default BookList;