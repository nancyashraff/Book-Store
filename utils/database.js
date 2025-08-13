import { faker } from '@faker-js/faker';

const users = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
}));

const books = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: faker.commerce.productName(),
  author: faker.person.fullName(),
  price: faker.commerce.price({ min: 5, max: 50, dec: 2, symbol: "$" }),
  isbn: faker.string.uuid(),
}));

// const books= [
//         { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99 },
//         { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.50 },
//         { id: 3, title: "1984", author: "George Orwell", price: 9.99 }
//     ]

export default { users, books };
