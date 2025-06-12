'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Book } from '@/types/book';

type AddBookResult = {
  success: boolean;
  error?: string;
};

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('API');

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch('/api/books');

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error) || `HTTP ${response.status}`;
      }

      const data = await response.json();
      setBooks(data.books);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : t('error.fetch_books_failed'));
    } finally {
      setLoading(false);
    }
  }, [t]);

  const addBook = useCallback(async (newBook: Omit<Book, 'id'>): Promise<AddBookResult> => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        return {
          success: false,
          error: data.error || t('error.add_book_failed'),
        };
      }

      const data = await response.json();
      setBooks(data.books);
      return { success: true };
    } catch {
      return {
        success: false,
        error: t('error.add_book_failed'),
      };
    }
  }, [t]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return {
    addBook,
    books,
    error,
    loading,
  };
}