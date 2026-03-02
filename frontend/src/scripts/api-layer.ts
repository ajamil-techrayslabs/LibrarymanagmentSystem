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
export const getAllUser = () => {
  const users = JSON.parse(localStorage.getItem('data') as string).users as Array<Object>;
  return users;
}
export const existByEmail = (email: string): boolean => {
  const users = JSON.parse(localStorage.getItem('data') as string).users as Array<Object>;
  const user = users.find((user) => user.email == email);
  console.log(user);
  return user ? true : false;
}
export const getUserByUserId = (userId: number) => {
  const data = JSON.parse(localStorage.getItem('data') as string).users as Array<Object>;
  let user: object | null = null;
  data.forEach((ele: Object) => {
    if (ele.id === userId) {
      user = ele;
    }
  })
  return user;
}
export const getUserByUserEmailId = (email: string) => {
  const data = JSON.parse(localStorage.getItem('data') as string).users as Array<Object>;
  let user: object | null = null;
  data.forEach((ele: Object) => {
    if (ele.email == email) {
      user = ele;
    }
  })
  return user;
}
export const getAllBooks = () => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Object>;
  return books;
}
export const getBookByBookId = (bookId: number) => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Object>;
  let specificBook: object | null = null;
  books.forEach((book) => {
    if (book.id == bookId) {
      specificBook = book;
    }
  })
  return specificBook;
}
export const createNewUser = (user: object) => {
  const users = JSON.parse(localStorage.getItem('data') as string).users as Array<Object>;
  const newUserId = users[users.length - 1].id + 1;
  user.id = newUserId;
  users.push(user);
  const data = JSON.parse(localStorage.getItem('data') as string) as object;
  data.users = users;
  localStorage.setItem('data', JSON.stringify(data));
  swal("Registered", "Register Successfully done", "success", {
    button: "Done",
  });
}
export const getRoleByRoleId = (id: number) => {
  const roles = JSON.parse(localStorage.getItem('data') as string).roles as Array<Object>;
  let specificRole: object | null = null;
  roles.forEach((r) => {
    if (r.id == id) {
      specificRole = r;
    }
  })
  return specificRole;
}
export const getAllAuthors = () => {
  const authors = JSON.parse(localStorage.getItem('data') as string).authors as Array<Object>;
  return authors;

}
export const getAuthorByAuthorId = (authorId: number) => {
  const authors = JSON.parse(localStorage.getItem('data') as string).authors as Array<Object>;
  let specificAuthor: object | null = null;
  authors.forEach((a) => {
    if (a.id == authorId) {
      specificAuthor = a;
    }
  })
  return specificAuthor;
}
export const getAllBookDetailByBookId = (bookId: number) => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Object>;
  let specificBook: any;
  let categoryOfBook: object | null = null;
  let publisherOfBook: object | null = null;
  let authersOfBook: Array<Object> = [];
  books.forEach((book) => {
    if (book.id == bookId) {
      specificBook = book;
    }
  })
  const categories = JSON.parse(localStorage.getItem('data') as string).categories as Array<Object>;
  categories.forEach((c: object) => {
    if (c.id == specificBook.categoryId) {
      categoryOfBook = c;
    }
  })
  const publishers = JSON.parse(localStorage.getItem('data') as string).publishers as Array<Object>;
  publishers.forEach((p) => {
    if (p.id == specificBook.publishedId) {
      publisherOfBook = p;
    }
  })
  const authors_books = JSON.parse(localStorage.getItem('data') as string).author_book as Array<Object>;
  authors_books.forEach((ab) => {
    if (specificBook.id == ab.bookId) {
      authersOfBook.push(getAuthorByAuthorId(ab.authorId))
    }
  })
  specificBook.category = categoryOfBook;
  specificBook.authors = authersOfBook;
  specificBook.publisher = publisherOfBook;
  return specificBook;

}
export const getCountOfDistictBooks = (): number => {
  const books = JSON.parse(localStorage.getItem('data') as string).books as Array<Object>;
  return books.length;
}
export const getCounts = () => {
  const physicalCopies = JSON.parse(localStorage.getItem('data') as string).book_copies as Array<Object>;
  let issuedBook = 0;
  let availableBook = 0;
  let damagedBook = 0
  physicalCopies.forEach((b: any) => {
    if (b.status == "AVAILABLE") availableBook++;
    else if (b.status == "ISSUED") issuedBook++;
    else damagedBook++;
  })
  return { issuedBook, availableBook, damagedBook };
}
export const getAllCagtegories = () => {
  const categories = JSON.parse(localStorage.getItem('data') as string).categories as Array<Object>;
  return categories;
}
export const getCagtegoryById = (Cid: number) => {
  const categories = JSON.parse(localStorage.getItem('data') as string).categories as Array<Object>;
  let specificCategory: object | null = null;
  categories.forEach((c) => {
    if (c.id == Cid) {
      specificCategory = c;
    }
  })
  return specificCategory;
}
export const getAllPublisher = () => {
  const publishers = JSON.parse(localStorage.getItem('data') as string).publishers as Array<Object>;
  return publishers;
}
export const getPublisherById = (pid: number) => {
  const publishers = JSON.parse(localStorage.getItem('data') as string).publishers as Array<Object>;
  let specificPublisher: object | null = null;
  publishers.forEach((p) => {
    if (p.id == pid) {
      specificPublisher = p;
    }
  })
  return specificPublisher;
}
export const editBookByBookId = (bookId: number, newBookDetails: object, authorsId: Array<String>) => {
  const rawData = localStorage.getItem("data");
  if (!rawData) return;

  const data = JSON.parse(rawData);
  const books = data.books;

  const index = books.findIndex((b: any) => Number(b.id) === Number(bookId));

  if (index === -1) return;

  newBookDetails.id = bookId;
  books[index] = newBookDetails;

  localStorage.setItem("data", JSON.stringify(data));
  const book_authors = JSON.parse(localStorage.getItem('data') as string).author_book as Array<Object>;
  const filteredBookAuthor = book_authors.filter((ele) => ele.bookId != bookId);
  authorsId.forEach((aId) => {
    filteredBookAuthor.push({ authorId: Number(aId), bookId: bookId })
  })
  const datas = JSON.parse(localStorage.getItem('data') as string)
  datas.author_book = filteredBookAuthor;
  localStorage.setItem('data', JSON.stringify(datas))
}
export const addNewBook = (newBook: object, authorsId: Array<String>) => {
  const data = JSON.parse(localStorage.getItem('data') as string);
  const books = data.books;
  const newBookId = books[books.length - 1].id + 1;
  newBook.id = newBookId;
  books.push(newBook)
  data.books = books;
  localStorage.setItem('data', JSON.stringify(data))
  const book_authors = JSON.parse(localStorage.getItem('data') as string).author_book as Array<Object>;
  authorsId.forEach((aId) => {
    book_authors.push({ authorId: Number(aId), bookId: newBookId })
  })
  const datas = JSON.parse(localStorage.getItem('data') as string)
  datas.author_book = book_authors;
  localStorage.setItem('data', JSON.stringify(datas))
}
export const saveBookCopy = (bookId: number, bookCopy: object) => {
  const data= JSON.parse(localStorage.getItem('data') as string)
  const bookCopies=data.book_copies;
  bookCopy.bookId=bookId;
  const newCopyId=bookCopies[bookCopies.length-1].id+1;
  bookCopy.id=newCopyId;
  console.log(bookCopy);
  bookCopies.push(bookCopy);
  data.book_copies=bookCopies;
  localStorage.setItem('data',JSON.stringify(data))
  return newCopyId;
  
}
export const editBookCopyByCopyId = (bookCopyId: number, newBookCopyDetails: object) => {
  const rawData = localStorage.getItem("data");
  if (!rawData) return;

  const data = JSON.parse(rawData);
  const bookCopies = data.book_copies;

  const index = bookCopies.findIndex((b: any) => Number(b.id) === Number(bookCopyId));
console.log(index);

  if (index === -1) return;

  newBookCopyDetails.id = bookCopyId;
  bookCopies[index] = newBookCopyDetails;
  console.log(bookCopies);
  
  data.book_copies=bookCopies;
  console.log(data);
  localStorage.setItem('data',JSON.stringify(data))

  }
  export const getBookCopyDetailsById = (bookCopyId: number) => {
  const bookCopies = JSON.parse(localStorage.getItem('data') as string).book_copies as Array<Object>;
  let specificBookCopy: object | null = null;
  bookCopies.forEach((b) => {
    if (b.id == bookCopyId) {
      specificBookCopy = b;
    }
  })
  return specificBookCopy;
}
export const getAllBookCopiesByBookId=(bookId:number)=>{
  const bookCopies=JSON.parse(localStorage.getItem('data')as string).book_copies;
  const requiredBookCopies=bookCopies.filter((b)=>b.bookId==bookId)
  return requiredBookCopies;
}
export const addNewCategory=(category:object)=>{
  const allCategories=getAllCagtegories();
  const newCategoryId=allCategories.length>0?(allCategories[allCategories.length-1].id +1):1;
  console.log(newCategoryId);
  
  allCategories.push({
    id:newCategoryId,
    name:category.name
  })
  const data=JSON.parse(localStorage.getItem('data')as string )
  data.categories=allCategories;
  localStorage.setItem('data',JSON.stringify(data))
}
export const editCategory=(categoryId:number,category:object)=>{
  const rawData = localStorage.getItem("data");
  if (!rawData) return;
  const data = JSON.parse(rawData);
  const categories = data.categories;

  const index = categories.findIndex((c: any) => Number(c.id) === Number(categoryId));

  if (index === -1) return;

  category.id = categoryId;
  categories[index] = category;

  localStorage.setItem("data", JSON.stringify(data));
}
export const deleteCategory=(categoryId:number)=>{
  const allCategories=getAllCagtegories();
  const filteredCategories=allCategories.filter((c)=>c.id!=categoryId)
  // console.log(filteredCategories);
  const data=JSON.parse(localStorage.getItem('data')as string );
  data.categories=filteredCategories;
  localStorage.setItem('data',JSON.stringify(data))
}
export const isCategoryUsed=(categoryId:number)=>{
  const books=getAllBooks();
  let isUsed:boolean=false;
  books.forEach((b)=>{
    if(b.categoryId==categoryId) isUsed=true;
  })
  return isUsed;
}
export const addNewPublisher=(publisher:object)=>{
  const allPublishers=getAllPublisher();
  const newPublisherId=allPublishers.length>0?(allPublishers[allPublishers.length-1].id +1):1;
  console.log(newPublisherId);
  publisher.id=newPublisherId;
  allPublishers.push(publisher);
  const data=JSON.parse(localStorage.getItem('data')as string )
  data.publishers=allPublishers;
  localStorage.setItem('data',JSON.stringify(data))
}
export const editPublisher=(publisherId:number,publisher:object)=>{
  const rawData = localStorage.getItem("data");
  if (!rawData) return;

  const data = JSON.parse(rawData);
  const publishers = data.publishers;

  const index = publishers.findIndex((p: any) => Number(p.id) === Number(publisherId));

  if (index === -1) return;

  publisher.id = publisherId;
  publishers[index] = publisher;

  localStorage.setItem("data", JSON.stringify(data));
}
export const isPublisherUsed=(publisherId:number)=>{
  const books=getAllBooks();
  let isUsed:boolean=false;
  books.forEach((b)=>{
    if(b.publishedId==publisherId) isUsed=true;
  })
  return isUsed;
}
export const deletePublisher=(publisherId:number)=>{
  const allPublisher=getAllPublisher();
  const filterPublisher=allPublisher.filter((p)=>p.id!=publisherId)
  // console.log(filteredCategories);
  const data=JSON.parse(localStorage.getItem('data')as string );
  data.publishers=filterPublisher;
  localStorage.setItem('data',JSON.stringify(data))
}
export const getAllAvailableBooks=()=>{
  const allCopies=JSON.parse(localStorage.getItem('data')as string).book_copies;  
  const filterAvailableCopies=allCopies.filter((c)=>c.status=='AVAILABLE');
  return filterAvailableCopies;
}
export const getAllIssues=()=>{
  return JSON.parse(localStorage.getItem('data') as string).book_issues;
}
export const issueBook=(issueBookDetails:object)=>{
  // changing the status of that book copy
  const bookCopyDetails= getBookCopyDetailsById(issueBookDetails.bookCopyId) ;
  console.log(bookCopyDetails);
  bookCopyDetails.status="ISSUED"
  delete bookCopyDetails.id;
  console.log(bookCopyDetails);
  editBookCopyByCopyId(issueBookDetails.bookCopyId,bookCopyDetails);
  // issue creation
  const allIssueBooks= getAllIssues();
  const newIssueId=allIssueBooks.length>0?(allIssueBooks[allIssueBooks.length-1].id +1):1;
  issueBookDetails.id=newIssueId;
  allIssueBooks.push(issueBookDetails);
  const data=JSON.parse(localStorage.getItem('data')as string);
  
  data.book_issues=allIssueBooks;
  localStorage.setItem('data',JSON.stringify(data))
}
// export const getIssueByIssueId=(issueId:number)=>{
//   const allIssues = getAllIssues();
//   const specific
// }
export const getIssuesByEmailId=(emailId:string)=>{
  const allIssues=getAllIssues();
  const user=getUserByUserEmailId(emailId);
  
  const filterIssueByEmail=allIssues.filter((issue)=>issue.userId==user.id);
  
  return filterIssueByEmail;
}
