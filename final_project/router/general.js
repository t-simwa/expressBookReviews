const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
      return res.status(400).json({message: "Username and password are required"});
  }

  if (isValid(username)) {
      return res.status(400).json({message: "User already exists!"});
  }

  users.push({"username":username,"password":password});
  return res.status(200).json({message: "User successfully registered. Now you can login"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
      return res.status(200).json(books[isbn]);
  } else {
      return res.status(404).json({message: "Book not found"});
  }
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const matchingBooks = [];
  
  for (let key in books) {
      if (books[key].author === author) {
          matchingBooks.push(books[key]);
      }
  }
  
  if (matchingBooks.length > 0) {
      return res.status(200).json(matchingBooks);
  } else {
      return res.status(404).json({message: "No books found for this author"});
  }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  const matchingBooks = [];
  
  for (let key in books) {
      if (books[key].title === title) {
          matchingBooks.push(books[key]);
      }
  }
  
  if (matchingBooks.length > 0) {
      return res.status(200).json(matchingBooks);
  } else {
      return res.status(404).json({message: "No books found with this title"});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
      const reviews = books[isbn].reviews;
      if (Object.keys(reviews).length > 0) {
          return res.status(200).json(reviews);
      } else {
          return res.status(200).json({message: "No reviews found for this book."});
      }
  } else {
      return res.status(404).json({message: "Book not found"});
  }
});

// Helper function to get all books using Promise
const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(books);
    } catch (error) {
      reject(error);
    }
  });
};

// Helper function to get book by ISBN using Promise
const getBookByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    if (books[isbn]) {
      resolve(books[isbn]);
    } else {
      reject(new Error("Book not found"));
    }
  });
};

// Helper function to get books by author using Promise
const getBooksByAuthor = (author) => {
  return new Promise((resolve, reject) => {
    const matchingBooks = [];
    for (let key in books) {
      if (books[key].author === author) {
        matchingBooks.push(books[key]);
      }
    }
    if (matchingBooks.length > 0) {
      resolve(matchingBooks);
    } else {
      reject(new Error("No books found for this author"));
    }
  });
};

// Helper function to get books by title using Promise
const getBooksByTitle = (title) => {
  return new Promise((resolve, reject) => {
    const matchingBooks = [];
    for (let key in books) {
      if (books[key].title === title) {
        matchingBooks.push(books[key]);
      }
    }
    if (matchingBooks.length > 0) {
      resolve(matchingBooks);
    } else {
      reject(new Error("No books found with this title"));
    }
  });
};

// Task 10: Get the list of books available in the shop using Promise callbacks or async-await
public_users.get('/async', async function (req, res) {
  try {
    const allBooks = await getAllBooks();
    return res.status(200).send(JSON.stringify(allBooks, null, 4));
  } catch (error) {
    return res.status(500).json({message: "Error fetching books", error: error.message});
  }
});

// Task 11: Get book details based on ISBN using Promise callbacks or async-await
public_users.get('/async/isbn/:isbn', async function (req, res) {
  try {
    const isbn = req.params.isbn;
    const book = await getBookByISBN(isbn);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

// Task 12: Get book details based on Author using Promise callbacks or async-await
public_users.get('/async/author/:author', async function (req, res) {
  try {
    const author = req.params.author;
    const matchingBooks = await getBooksByAuthor(author);
    return res.status(200).json(matchingBooks);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

// Task 13: Get book details based on Title using Promise callbacks or async-await
public_users.get('/async/title/:title', async function (req, res) {
  try {
    const title = req.params.title;
    const matchingBooks = await getBooksByTitle(title);
    return res.status(200).json(matchingBooks);
  } catch (error) {
    return res.status(404).json({message: error.message});
  }
});

module.exports.general = public_users;
