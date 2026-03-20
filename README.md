# Library Management System

The Library Management System is a web based application designed to manage books, authors, book category, publisher and user borrowing activities efficiently.

The goal of the project is to simplify library operations and maintaining the accurate records of books and users.

Developers can refers to the SRS documentations : docs/srs.docx

### live Demo

**URL:** [https://cosmic-fudge-3e2057.netlify.app/](https://cosmic-fudge-3e2057.netlify.app/)

**sample users**
| Role | Email | Password |
|------|-------|----------|
| Super Admin | `superAdmin@gmail.com` | `super123` |
| Admin (Librarian)| `admin@gamil.com` | `admin123`|
| Member | `member@gmail.com` | `member123`|

##  Table of Contents
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [System overview](#system-overview)
- [Features](#features)
- [Tech Stack Used](#tech-stack-used)
- [Database Structure](#database-structure)
- [Frontend Architecture](#frontend-architecture)
- [localStorage keys References](#localstorage-keys-references)
- [API Design](#api-design)
- [Folder Structure](#folder-structure)
- [ Authentication and Security](#authentication-and-security)
- [Decision and Assumption](#decision-and-assumption)
- [Limitations](#limitation)
- [Future Enhancement](#future-enhancement)

---
##  Prerequisites

| Tool | Minimum Version | Check |
|------|----------------|-------|
| Node.js | v18 or above | `node -v` |
| npm | v9 or above | `npm -v` |
| Git | Any recent version | `git --version` |

---
---

## Installation and Setup
1. clone the repository
```bash
git clone https://github.com/ajamil-techrayslabs/LibraryManagementSystemFinal.git
```
2. Go to the Directory
```bash
cd LibraryManagementSystemFinal/frontend
code .
```
3. Install tailwind cli
```bash
npm install tailwindcss @tailwindcss/cli
```
4. Install TypeScript
```bash
npm install typescript --save-dev
```
5. Run Tailwind
```bash
npm run tailwind
```
6. Run Typescript 
```bash
npm run ts
```
**now open index.html with live server now project is running on localhost**

**Build for Production**
```bash
npm run build
```

---

## System overview
The Library management system is a web application  that is used to manages the records of books, issued details,
track the availiblity of books, impose fine on delay return, keep the record of shelf location of books and so on.

This system will provide the better and accurate way to handle the records of library's books and users.

### Three Types of user's role
**Super Admin** : This user have all the access to the system.

**Admin** : This role is given to the librarian who is an employee who will manages the records with system. He can add, delete, update the books and issue books to the member.

**Member** : This role is given to the normal user who will borrowed the books from the library.

## Features
### User Authentication and role management
    - User Registeration
    - User Login
    - Role based Access control to the pages
    - Different permissions for super admin, admin and member.
    - Securly password are stored by hashing.
### Book Management
    - Add new books.
    - Edit Book Informations.
    - Delete book.
    - Add Book Copies to it.
    - View the list of copies of books.
    - View Books
### Book Copy Management
    - Add Book Copies.
    - Assign Shelf Locations.
    - Track Available copies.
### Author Management
    - Add new authors.
    - Edit author details.
    - Delete Author.
    - View list of authors.
### Category Management
    - Add Category.
    - Edit Category.
    - Delete Category
    - Prevent Duplicate Entry
### Publisher Management
    - Add publisher
    - Edit publisher
    - Delete publisher
    - Prevent Duplicate publisher.
    - View the list of publisher
    - Prevent deletion if used.
### Employee Management
    - Add Employee (librarians only)
    - Edit Employee
    - De-Activate Employee
    - View the list of employee according to active and de-active status
### Member Management
    - Add Member
    - De-Activate Member
    - Edit Member( yet to implement)
    - View the list of member according to active and de-active status.
### Book Issue and return
    The system allows librarians to issue a available books and record the issue details such as:
        - Issue Id
        - Book Id
        - Book Copy Id
        - Issue Date
        - Due Date
        - Rental Amount
        - Total Amount
    The System also allows returning books and updates the availablity status
    of that book copy Id
    If anyone return book after due date then fine will be calculated rs 1/day
    and have to pay the fine amount.
### CSV Export
    - this application contain csv export feature where higher authority can extract the data into csv files.
### Searching
    The System includes searching features includes:
        - User can search books unsing book title
        - User can search author by name and read about the author bio.
        - Super Admin can search for Employee or member by name or email Id.
        - Issued can be search using Issued Id
        - Apply filter in Employee, Member, list Issue pages.
    This helps users quickly find the required books.
## Tech Stack Used
**Frontend:**
- HTML
- Tailwind CSS
- TypeScript
- Local Storage (for storing data)

**Tools**
- Git & Github

## Database Structure
### role
- id (number)
- name (string)
### User
- id (number)
- name (string)
- email (string)
- password (string)
- mobileNumber (string)
- roleId (number)
- isActive (boolean)
### Category
- id (number)
- name (string)
### Publisher
- id (number)
- name (string)
- address (string)
- phone (number)
- email (string)
### Author
- id (number)
- name (string)
- bio (string)
### Book
- id (number)
- title (string)
- description (string)
- categoryId (number)
- pricePerWeek (number)
- publisherId (number)
### Book Copies
- id (number)
- bookId (number)
- status (string)
- shelfLocation (string)
### Book Issue
- id (number)
- userId (number)
- bookCopyId (number)
- issueDate (date)
- dueDate(date)
- returnDate(date)
- fineAmount (number)
- totalCharges(number)
- rentalPaymentStatus(boolean)
- status (String)
### Relationships
- One user - Many book issues
- One book - Many book copies
- One book - Many authors (Many-to-Many)
- One category - Many books
- One publisher - Many books

Database design is properly explained in database/

## localStorage keys References

| Key | Contains |
|-----|---------|
| `token` | Current session token |
| `data` | All data stored as object  |

## Frontend Architecture
This project is built using HTML, TailwindCSS and TypeScript.

### How it works
Each time you access any page then the linked compiled javascript file is run and gives you page with updated data.

### components Used
The Navbar and Sidebar are once i created and insert it into the each file required using loadComponent function 
defined : **layout.ts**.

### Data Flow 
```
page loads
    |
validate User token if invalid then redirect to the index.html
    |
According to the role the page will loads
    |
Fetch data using service layer of the page (eg: getAllUser())
    |
Renders data into the table format

```
```
User Submit Form / click button
    |
Validate inputs  entered by user
    |
using Service layer function write data into it.
    | 
Re-render the affected table
```
## API Design
The API is defined using YAML in: backend-design/api-design.yml

The API includes endpoints such as:

- GET /books
- POST /books
- GET /books/{id}
- POST /issues
- GET /issues/{id}

## Folder Structure
```
.
|-- backend-design/
|-- databases/
|-- docs/
|-- Frontend
    |-- assets/
        |-- images/
    |-- dist/
    |-- node_modules/
    |-- src
        |-- components/
        |-- pages/
        |-- scripts/
            |-- components/
            |-- layout/
            |-- models/
            |-- pages/
            |-- services/
            |-- utils/
            |-- index.ts
        |-- styles/
            |-- input.css
    |-- .gitignore
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- tsconfig.json
```

##  Authentication and Security

### Token structure

```
localStorage["token"] = "{base64_payload}"

Payload (decoded):
{
  email:   "super@admin.com",
  role:    "superadmin",
  exp:     1711234567890       // Date.now() + 24 hours in milliseconds
}

```
## Decision and Assumption

There are some assumption which i have made during development

1. Date.now() is used to generate unique id for the models.
2. Added some sample data for making easy development.
3. Used SHA-256  via web Crypto Api to hash the password.
4. Token is stored in the localStorage.
5. Used Local Storage instead of a real database

## Limitations
1. Data is stored in one browser on one device will not accessable from other device .
2. On Deleting data from local Storage will destroy all application data with no recovery
3. Client side token store which is less secure.

## Future Enhancement
1. Implement the backend using a proper database like mysql.
2. I will use jwt token.
3. Advance Dashboard for admin and super admin.
4. Re-set Password functionality using Gmail.
5. Multi-Library / Saas which allow multiple libraries to used it independently.

