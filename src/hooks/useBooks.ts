"use client"

import { useEffect, useState } from "react";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
}

type AddBookResult = {
  success: boolean;
  error?: string;
};

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error(`Failed to fetch books: ${response.statusText}`);
      }
      const data = await response.json();
      setBooks(data.books);
      setError(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (newBook: Omit<Book, 'id'>): Promise<AddBookResult> => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        return {
          success: false,
          error: `Failed to add book: ${response.statusText}`
        };
      }

      const data = await response.json();
      setBooks(data.books);
      return { success: true };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to add book'
      };
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    addBook,
    books,
    error,
    loading,
  };
}