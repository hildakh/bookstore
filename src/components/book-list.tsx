"use client";

import { Book, useBooks } from "@/hooks/useBooks";
import { useTranslations } from "next-intl";
import Card from "./card";

export default function BookList() {
  const { books, loading } = useBooks();
  const t = useTranslations('BookList');

  return (
    <div className="w-3/4">
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        books.map((book: Book) => (
          <Card key={book.id} book={book} />
        ))
      )}
    </div>
  )
}