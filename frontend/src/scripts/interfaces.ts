export interface Role{
    id: number;
    name: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  roleId: number;
  password: string;
  mobileNumber: string;
  isActive: number;
}

export interface Book {
  id: number;
  title: string;
  description: string;
  publishYear: number;
  categoryId: number;
  publishedId: number;
  pricePerWeek: number;
}

export interface Author {
  id: number;
  name: string;
  bio: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Publisher {
  id: number;
  name: string;
  address: string;
  phone: string;
  email:string;

}

export interface BookCopy {
  id: number;
  bookId: number;
  status: string;
  shelfLocation: string;
}

export interface AuthorBook {
  authorId: number;
  bookId: number;
}
export interface BookIssues{
  id: number;
  userId: number;
  bookCopyId: number;
  issueDate: Date;
  dueDate: Date;
  returnDate: Date;
  fineAmount: number;
  totalCharges: number;
  rentalAmount:number;
  rentalPaymentStatus: number;
  status: string;
}
export interface LocalData{
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