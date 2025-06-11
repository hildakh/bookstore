import * as initialBooks from '../../../data/books.json';

export const GET = async () => {
  return Response.json(initialBooks, {
    status: 200
  })
};