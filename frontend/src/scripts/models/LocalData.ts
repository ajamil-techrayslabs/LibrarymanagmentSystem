import type Role from "./Role.js";
import type User from "./User.js";
import type Category from "./Category.js";
import type Publisher from "./Publisher.js";
import type Author from "./Author.js";
import type Book from "./Book.js";
import type AuthorBook from "./AuthorBook.js";
import type BookCopy from "./BookCopy.js";
import type BookIssues from "./BookIssues.js";
export default interface LocalData{
  roles: Array<Role>;
  users: Array<User>;
  membersip_plans:Array<any>;
  user_memberships:Array<any>;
  categories:Array<Category>;
  publishers: Array<Publisher>;
  authors: Array<Author>;
  books:Array<Book>;
  author_book:Array<AuthorBook>;
  book_copies:Array<BookCopy>;
  book_issues:Array<BookIssues>
}