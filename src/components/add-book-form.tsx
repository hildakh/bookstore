'use client';

import { useBooks } from '@/hooks/useBooks';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface FormData {
  title: string;
  author: string;
  price: string;
}

export default function AddBookForm() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    author: '',
    price: '',
  });
  const [formError, setFormError] = useState<string | null>(null);

  const t = useTranslations('AddBook');
  const { addBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const price = parseFloat(formData.price);

    if (isNaN(price) || price <= 0) {
      setFormError(t('error.invalid_price'));
      return;
    }

    if (!formData.title.trim() || !formData.author.trim()) {
      setFormError(t('error.required_field_missing'));
      return;
    }

    const result = await addBook({
      ...formData,
      price,
    });

    if (result.success) {
      router.push('/');
    } else {
      setFormError(result.error || t('error.generic'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md items-center w-full">
      {formError && (
        <div className="text-red-600 px-4 py-3 rounded-lg bg-red-50">
          ⚠️ {formError}
        </div>
      )}
      <div className="flex flex-col gap-2 w-3/4">
        <label htmlFor="book-title-input" className="font-medium text-left">
          {t('title')}
        </label>
        <input
          required
          type="text"
          id="book-title-input"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="bg-secondary border border-primary/20 rounded-lg p-2
                   focus:border-accent focus:outline-none"
          placeholder='Murder on the Orient Express'
        />
      </div>

      <div className="flex flex-col gap-2 w-3/4">
        <label htmlFor="book-author-input" className="font-medium text-left">
          {t('author')}
        </label>
        <input
          required
          type="text"
          id="book-author-input"
          value={formData.author}
          onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="bg-secondary border border-primary/20 rounded-lg p-2
                   focus:border-accent focus:outline-none"
          placeholder='Agata Christie'
        />
      </div>

      <div className="flex flex-col gap-2 w-3/4">
        <label htmlFor="book-price-input" className="font-medium text-left">
          {t('price')}
        </label>
        <input
          required
          type="number"
          step="0.01"
          min="0"
          id="book-price-input"
          value={formData.price}
          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
          className="bg-secondary border border-primary/20 rounded-lg p-2
                   focus:border-accent focus:outline-none"
          placeholder='9.99'
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-background px-6 py-3 rounded-lg
                 hover:bg-accent transition-colors mt-4"
      >
        {t('submit')}
      </button>
    </form>
  );
};
