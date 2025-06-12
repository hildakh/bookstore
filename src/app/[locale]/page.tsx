import Link from "next/link";
import { useTranslations } from 'next-intl';
import BookList from "@/components/book-list";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-4xl">
        {t('book_store')}
      </h1>
      <BookList />
      <Link
        href="/add-book"
        className="bg-primary text-background text-lg px-6 py-3 rounded-lg w-1/4 mb-4 hover:bg-accent transition-colors duration-200"
      >{t('add_book')}
      </Link>
    </main>
  );
}