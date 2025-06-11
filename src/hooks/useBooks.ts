"use client"

import { useEffect, useState } from "react";

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
}

export const useBooks = () => {
  const [ books, setBooks ] = useState<Book[]>([])
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();

      setBooks(data.books);
      setLoading(false);
    } catch (error) {
      console.error('hola error', error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    setBooks,
    loading,
  }
}