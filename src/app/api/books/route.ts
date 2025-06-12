import { NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import * as initialBooks from '../../../data/books.json';

// In-memory store for books that persists between requests & page refreshes
// but resets when server restarts
let books = [...initialBooks.books];

export async function GET() {
  return NextResponse.json(
    { books },
    { status: 200 },
  );
};

export async function POST(request: Request) {
  const t = await getTranslations('API');

  try {
    const newBook = await request.json();

    // Validate required fields
    if (!newBook.title || !newBook.author || !newBook.price) {
      return NextResponse.json({
        error: t('errors.required_field_missing'),
        status: 400,
      });
    }

    const book = {
      ...newBook,
      // Generate a random unique ID
      id: Date.now().toString(),
    };

    books = [...books, book];

    return NextResponse.json(
      { books },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: t('errors.add_book_failed') },
      { status: 500 },
    );
  }
}