'use client';

import { useBooks } from '@/hooks/useBooks';
import { useTranslations } from 'next-intl';
import Card from './card';

export default function BookList() {
  const { books, loading, error } = useBooks();
  const t = useTranslations('BookList');

  if (loading) {
    return <p className="text-center">{t('loading')}</p>;
  }

  if (error) {
    return (
      <div className="text-red-600 px-4 py-3 rounded-lg bg-red-50">
        {error}
      </div>
    );
  }

  return (
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
}