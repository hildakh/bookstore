import { NextResponse } from 'next/server';
import * as initialBooks from '../../../data/books.json';

let books = [...initialBooks.books];

export async function GET() {
  return NextResponse.json(
    { books },
    { status: 200 }
  );
};

export async function POST(request: Request) {
  try {
    const newBook = await request.json();

    if (!newBook.title || !newBook.author || !newBook.price) {
      return NextResponse.json({
        error: 'Missing required fields',
        status: 400
      });
    }

    const book = {
      ...newBook,
      id: Date.now().toString(),
      price: parseFloat(newBook.price),
    };

    books = [...books, book];

    return NextResponse.json(
      { books },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      error: `Failed to add book ${error}`,
      status: 500
    });
  }
}