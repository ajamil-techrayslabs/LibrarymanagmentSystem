
import type User from "./models/User.js";
import type Book from "./models/Book.js";
import type LocalData from "./models/LocalData.js";
import type Role from "./models/Role.js";
import type Author from "./models/Author.js";
import type Category from "./models/Category.js";
import type Publisher from "./models/Publisher.js";
import type AuthorBook from "./models/AuthorBook.js";

const data: object = {
  "roles": [
    { "id": 1, "name": "ADMIN", "createdAt": "2026-02-01T10:00:00Z" },
    { "id": 2, "name": "MEMBER", "createdAt": "2026-02-01T10:00:00Z" }
  ],

  "users": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@gmail.com",
      "password": "admin",
      "mobileNumber": "9876543210",
      "roleId": 1,
      "isActive": 1,
      "createdAt": "2026-02-01T10:00:00Z",
      "updatedAt": "2026-02-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Member",
      "email": "member@gmail.com",
      "password": "member",
      "mobileNumber": "9123456780",
      "roleId": 2,
      "isActive": 1,
      "createdAt": "2026-02-02T09:00:00Z",
      "updatedAt": "2026-02-02T09:00:00Z"
    }
  ],

  "membership_plans": [
    {
      "id": 1,
      "name": "Basic Plan",
      "durationInDays": 30,
      "maxBookAllowed": 2,
      "discountPercentage": 0,
      "finePerDay": 5.00,
      "price": 199.00,
      "isActive": 1,
      "createdAt": "2026-02-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Premium Plan",
      "durationInDays": 90,
      "maxBookAllowed": 5,
      "discountPercentage": 10,
      "finePerDay": 3.00,
      "price": 499.00,
      "isActive": 1,
      "createdAt": "2026-02-01T00:00:00Z"
    }
  ],

  "user_memberships": [
    {
      "id": 1,
      "userId": 2,
      "membershipPlanId": 2,
      "startDate": "2026-02-01",
      "endDate": "2026-05-01",
      "status": "ACTIVE",
      "createdAt": "2026-02-01T10:30:00Z"
    }
  ],

  "categories": [
    { "id": 1, "name": "Programming" },
    { "id": 2, "name": "Self Help" }
  ],

  "publishers": [
    {
      "id": 1,
      "name": "Pearson",
      "address": "New Delhi, India",
      "phone": "01122334455",
      "email": "contact@pearson.com",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    }
  ],

  "authors": [
    {
      "id": 1,
      "name": "Robert C. Martin",
      "bio": "Software engineer and author.",
      "createdAt": "2026-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "James Clear",
      "bio": "Author of Atomic Habits.",
      "createdAt": "2026-01-01T00:00:00Z"
    }
  ],

  "books": [
    {
      "id": 1,
      "title": "Clean Code",
      "description": "A handbook of Agile software craftsmanship.",
      "publishYear": 2008,
      "categoryId": 1,
      "pricePerWeek": 50.00,
      "publishedId": 1,
      "createdAt": "2026-01-05T00:00:00Z",
      "deletedAt": null
    },
    {
      "id": 2,
      "title": "Atomic Habits",
      "description": "An easy & proven way to build good habits.",
      "publishYear": 2018,
      "categoryId": 2,
      "pricePerWeek": 40.00,
      "publishedId": 1,
      "createdAt": "2026-01-10T00:00:00Z",
      "deletedAt": null
    }
  ],

  "author_book": [
    { "authorId": 1, "bookId": 1 },
    { "authorId": 2, "bookId": 2 }
  ],

  "book_copies": [
    {
      "id": 1,
      "bookId": 1,
      "status": "AVAILABLE",
      "shelfLocation": "A1-R1",
      "createdAt": "2026-01-06T00:00:00Z"
    },
    {
      "id": 2,
      "bookId": 1,
      "status": "AVAILABLE",
      "shelfLocation": "A1-R2",
      "createdAt": "2026-01-06T00:00:00Z"
    },
    {
      "id": 3,
      "bookId": 2,
      "status": "AVAILABLE",
      "shelfLocation": "B2-R1",
      "createdAt": "2026-01-11T00:00:00Z"
    }
  ],

  "book_issues": [
    {
      "id": 1,
      "userId": 2,
      "bookCopyId": 2,
      "issueDate": "2026-02-05",
      "dueDate": "2026-02-12",
      "returnDate": null,
      "fineAmount": 0.00,
      "totalCharges": 50.00,
      "rentalAmount": 50.00,
      "rentalPaymentStatus": 1,
      "status": "RETURNED",
      "createdAt": "2026-02-05T09:00:00Z"
    }
  ]
}
var swal: any;
export const StoreDataToLocalStorage = () => {
  if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(data))
    console.log("done");

  }
}
export const getUserByUserId = (userId: number) => {
  const data = JSON.parse(localStorage.getItem('data') as string).users as Array<User>;
  let user: User | null = null;
  data.forEach((ele: User) => {
    if (ele.id === userId) {
      user = ele;
    }
  })
  return user;
}
export const getUserByUserEmailId = (email: string) => {
  const data = JSON.parse(localStorage.getItem('data') as string).users as Array<User>;
  let user: User | null = null;
  data.forEach((ele: User) => {
    if (ele.email == email) {
      user = ele;
    }
  })
  return user;
}
export const getAllBooks = () => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Book>;
  return books;
}
export const getBookByBookId = (bookId: number) => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Book>;
  let specificBook: Book | null = null;
  books.forEach((book) => {
    if (book.id == bookId) {
      specificBook = book;
    }
  })
  return specificBook;
}

export const getAllBookDetailByBookId = (bookId: number) => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Book>;
  let specificBook: any;
  let categoryOfBook: Category | null = null;
  let publisherOfBook: Publisher | null = null;
  let authersOfBook: Array<Author> = [];
  books.forEach((book) => {
    if (book.id == bookId) {
      specificBook = book;
    }
  })
  const categories = JSON.parse(localStorage.getItem('data') as string).categories as Array<Category>;
  categories.forEach((c: Category) => {
    if (c.id == specificBook.categoryId) {
      categoryOfBook = c;
    }
  })
  const publishers = JSON.parse(localStorage.getItem('data') as string).publishers as Array<Publisher>;
  publishers.forEach((p) => {
    if (p.id == specificBook.publishedId) {
      publisherOfBook = p;
    }
  })
  const authors_books = JSON.parse(localStorage.getItem('data') as string).author_book as Array<AuthorBook>;
  authors_books.forEach((ab:AuthorBook) => {
    if (specificBook.id == ab.bookId) {
       let author= getAuthorByAuthorId(ab.authorId);
       if(author!=null)
            authersOfBook.push(author)
    }
  })
  specificBook.category = categoryOfBook;
  specificBook.authors = authersOfBook;
  specificBook.publisher = publisherOfBook;
  return specificBook;

}
export const getRoleByRoleId = (id: number) => {
  const roles = JSON.parse(localStorage.getItem('data') as string).roles as Array<Role>;
  let specificRole: Role | null = null;
  roles.forEach((r) => {
    if (r.id == id) {
      specificRole = r;
    }
  })
  return specificRole;
}
export const getAuthorByAuthorId = (authorId: number) => {
  const authors = JSON.parse(localStorage.getItem('data') as string).authors as Array<Author>;
  let specificAuthor: Author | null = null;
  authors.forEach((a) => {
    if (a.id == authorId) {
      specificAuthor = a;
    }
  })
  return specificAuthor;
}
