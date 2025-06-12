import AddBookForm from '@/components/add-book-form';
import { useTranslations } from 'next-intl';

export default function AddBook() {
  const t = useTranslations('AddBook');

  return (
    <main className="flex flex-col items-center gap-6 py-8">
      <h1 className="text-4xl font-bold">{t('add_book')}</h1>
      <AddBookForm />
    </main>
  );
}