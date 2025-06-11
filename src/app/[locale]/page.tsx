import Link from "next/link";
import { useTranslations } from 'next-intl';
import BookList from "@/components/book-list";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <h1 className="text-4xl">
        {t('book_store')}
      </h1>
      <BookList />
      <Link
        href="/add-book"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
      >{t('add_book')}
      </Link>

    </main>
  );
}
