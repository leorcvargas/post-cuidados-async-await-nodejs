const DELAY = 50;

const getReviewsByBookId = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ])
    }, DELAY);
  })
};

const getSellersByBookId = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ])
    }, DELAY);
  })
};

const getAuthorById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'J. R. R. Tolkien',
        price: 10,
        authorId: 1,
      });
    }, DELAY);
  });
};

const getBookById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'LOTR Vol. 1',
        price: 10,
        authorId: 1,
      });
    }, DELAY);
  });
}


const getBookDataExample1 = async (id) => {
  const book = await getBookById(id);
  const reviews = await getReviewsByBookId(book.id);
  const author = await getAuthorById(book.authorId);
  const sellers = await getSellersByBookId(book.id);

  return { ...book, reviews, author, sellers };
};

const getBookDataExample2 = async (id) => {
  const book = await getBookById(id);

  const [reviews, author, sellers] = await Promise.all([
    getReviewsByBookId(book.id),
    getAuthorById(book.authorId),
    getSellersByBookId(book.id),
  ]);

  return { ...book, reviews, author, sellers };
};

module.exports = { getBookDataExample1, getBookDataExample2 };
