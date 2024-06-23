# 📚 Book Management System with Next.js

Welcome to the Book Management System! This project is built using Next.js and Node.js to provide a seamless experience for managing a list of books. The system supports CRUD operations and includes an intuitive UI with modals for editing and deleting books.

## 🚀 Features

- **Home Page**: View all books in a beautiful data grid.
- **Add Book**: Add new books to the collection.
- **Edit Books**: Edit existing books with ease.
- **Delete Books**: Delete books with confirmation modals.
- **API Documentation**: Access API documentation through Swagger.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/book-management-system.git
   cd book-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root of your project and add the following line:
   ```
   NEXT_PUBLIC_NODE_API_URL=http://localhost:3001
   ```

4. **Start the Node.js server**:
   ```bash
   node server.js
   ```

5. **Start the Next.js development server**:
   ```bash
   npm run dev
   ```

### Accessing the Application

- **Next.js App**: The application will be running at `http://localhost:3000`.
- **API Documentation**: Access Swagger documentation at `http://localhost:3001/api-docs`.

## 🌐 Pages

### Home Page

- **Path**: `/`
- **Description**: Displays all books in a data grid. Click on "Edit" to open the edit modal and "Delete" to open the delete confirmation modal.

### Add Book

- **Path**: `/add`
- **Description**: Provides a form to add a new book to the collection.

### Edit Books

- **Path**: `/edit`
- **Description**: Displays all books in a data grid with options to edit or delete each book.

## 🧩 Components

### NavBar

- A navigation bar at the top to visit all three pages.

### BookModal

- A modal to view book details.

### BookEditModal

- A modal to edit book details.

### ConfirmDeleteModal

- A modal to confirm the deletion of a book.

### BookForm

- A form component used for adding and editing books.

## 📋 API Endpoint Documentation

### Create a Book

- **Endpoint**: `POST /api/books`
- **Request Body**: JSON object containing `title`, `author`, `publishedDate`, and `summary`.
- **Response**: The created book object with a unique ID.

### Retrieve All Books

- **Endpoint**: `GET /api/books`
- **Response**: An array of all book objects.

### Retrieve a Single Book

- **Endpoint**: `GET /api/books/[id]`
- **Response**: The book object with the specified ID.

### Update a Book

- **Endpoint**: `PUT /api/books/[id]`
- **Request Body**: JSON object containing `title`, `author`, `publishedDate`, and `summary`.
- **Response**: The updated book object.

### Delete a Book

- **Endpoint**: `DELETE /api/books/[id]`
- **Response**: The deleted book object.

## 🎨 Example Requests and Responses

### Create a Book Example

**Request**:
```bash
curl -X POST http://localhost:3000/api/books -H "Content-Type: application/json" -d '{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}'
```

**Response**:
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

### Retrieve All Books Example

**Request**:
```bash
curl -X GET http://localhost:3000/api/books
```

**Response**:
```json
[
  {
    "id": "1",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publishedDate": "1951-07-16",
    "summary": "A story about the events in the life of a young man"
  }
]
```

### Retrieve a Single Book Example

**Request**:
```bash
curl -X GET http://localhost:3000/api/books/1
```

**Response**:
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

### Update a Book Example

**Request**:
```bash
curl -X PUT http://localhost:3000/api/books/1 -H "Content-Type: application/json" -d '{
  "title": "The Catcher in the Rye (Updated)",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "An updated summary"
}'
```

**Response**:
```json
{
  "id": "1",
  "title": "The Catcher in the Rye (Updated)",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "An updated summary"
}
```

### Delete a Book Example

**Request**:
```bash
curl -X DELETE http://localhost:3000/api/books/1
```

**Response**:
```json
{
  "id": "1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedDate": "1951-07-16",
  "summary": "A story about the events in the life of a young man"
}
```

## 📝 License

This project is licensed under the MIT License.

---

Happy coding! 🚀
