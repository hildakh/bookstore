import { useTranslations } from "next-intl";

export default function AddBook() {
  const t = useTranslations('AddBook');

  return (
    <main>
      <h1 className="text-4xl">{t('add_book')}</h1>
      <form action="">
        <input
          required
          type="text"
          name="title"
          id="book-title-input"
          className="bg-secondary border border-primary/20 rounded-lg p-2 focus:border-accent focus:outline-none"
        />
        <input
          required
          type="text"
          name="author"
          id="book-author-input"
          className="bg-secondary border border-primary/20 rounded-lg p-2 focus:border-accent focus:outline-none"
        />
        <input
          required
          type="text"
          name="price"
          id="book-price-inout"
          className="bg-secondary border border-primary/20 rounded-lg p-2 focus:border-accent focus:outline-none"
        />
      </form>
    </main>
  )
}