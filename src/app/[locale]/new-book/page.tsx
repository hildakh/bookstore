import { useTranslations } from "next-intl";

 const NewBook = () => {
  const t = useTranslations('NewBook');

  return (
    <main>
      <h1 className="text-4xl">{t('new_book')}</h1>
      <form action="">
        <input type="text" name="title" id="book-title-input" className="border"/>
        <input type="text" name="author" id="book-author-input" className="border"/>
        <input type="text" name="price" id="book-price-inout" className="border"/>
      </form>
    </main>
  )
}

export default NewBook;