# Final Project Submission Guide

This guide explains what you need to submit for each task in **Option 1 (AI-Graded)** and **Option 2 (Peer-Graded)**, and how to achieve each task.

---

## **TASK 1: Get List of All Books**

### What to Submit:
- **Option 1**: Text file named `getallbooks` containing:
  - The cURL command
  - The full JSON output from the terminal
- **Option 2**: Screenshot named `1-getallbooks.png` showing the Postman request/response

### How to Achieve:
1. **Start your server** (if not running):
   ```bash
   cd final_project
   npm install
   npm start
   ```

2. **Option 1 - Using cURL**:
   ```bash
   curl http://localhost:5000/
   ```
   Copy both the command and output, save in a file named `getallbooks`

3. **Option 2 - Using Postman**:
   - Method: GET
   - URL: `http://localhost:5000/`
   - Take screenshot showing request and response
   - Save as `1-getallbooks.png`

---

## **TASK 2: Get Book by ISBN**

### What to Submit:
- **Option 1**: Text file named `getbooksbyISBN` with cURL command + output
- **Option 2**: Screenshot named `2-getbooksbyISBN.png`

### How to Achieve:
1. **Option 1 - Using cURL**:
   ```bash
   curl http://localhost:5000/isbn/1
   ```
   Save command + output in `getbooksbyISBN`

2. **Option 2 - Using Postman**:
   - Method: GET
   - URL: `http://localhost:5000/isbn/1`
   - Screenshot saved as `2-getbooksbyISBN.png`

---

## **TASK 3: Get Books by Author**

### What to Submit:
- **Option 1**: Text file named `getbooksbyauthor` with cURL command + output
- **Option 2**: Screenshot named `3-getbooksbyauthor.png`

### How to Achieve:
1. **Option 1 - Using cURL**:
   ```bash
   curl http://localhost:5000/author/Chinua%20Achebe
   ```
   (Note: URL encode spaces as `%20` or use quotes)
   Save in `getbooksbyauthor`

2. **Option 2 - Using Postman**:
   - Method: GET
   - URL: `http://localhost:5000/author/Chinua Achebe`
   - Screenshot saved as `3-getbooksbyauthor.png`

---

## **TASK 4: Get Books by Title**

### What to Submit:
- **Option 1**: Text file named `getbooksbytitle` with cURL command + output
- **Option 2**: Screenshot named `4-getbooksbytitle.png`

### How to Achieve:
1. **Option 1 - Using cURL**:
   ```bash
   curl "http://localhost:5000/title/Things Fall Apart"
   ```
   (Use quotes for titles with spaces)
   Save in `getbooksbytitle`

2. **Option 2 - Using Postman**:
   - Method: GET
   - URL: `http://localhost:5000/title/Things Fall Apart`
   - Screenshot saved as `4-getbooksbytitle.png`

---

## **TASK 5: Get Book Reviews**

### What to Submit:
- **Option 1**: Text file named `getbookreview` with cURL command + output
- **Option 2**: Screenshot named `5-getbookreview.png`

### How to Achieve:
1. **Option 1 - Using cURL**:
   ```bash
   curl http://localhost:5000/review/1
   ```
   Save in `getbookreview`

2. **Option 2 - Using Postman**:
   - Method: GET
   - URL: `http://localhost:5000/review/1`
   - Screenshot saved as `5-getbookreview.png`

---

## **TASK 6: Register New User**

### What to Submit:
- **Option 1**: Text file named `register` with cURL command + output
- **Option 2**: Screenshot named `6-register.png`

### How to Achieve:
1. **Option 1 - Using cURL**:
   ```bash
   curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"
   ```
   Save in `register`

2. **Option 2 - Using Postman**:
   - Method: POST
   - URL: `http://localhost:5000/register`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "username": "testuser",
       "password": "testpass"
     }
     ```
   - Screenshot saved as `6-register.png`

---

## **TASK 7: Login as Registered User**

### What to Submit:
- **Option 1**: Text file named `login` with cURL command + output
- **Option 2**: Screenshot named `7-login.png`

### How to Achieve:
1. **First, register a user** (Task 6) if you haven't already

2. **Option 1 - Using cURL**:
   ```bash
   curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}" -c cookies.txt
   ```
   (The `-c cookies.txt` saves the session cookie)
   Save in `login`

3. **Option 2 - Using Postman**:
   - Method: POST
   - URL: `http://localhost:5000/customer/login`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "username": "testuser",
       "password": "testpass"
     }
     ```
   - Screenshot saved as `7-login.png`

---

## **TASK 8: Add/Modify Book Review**

### What to Submit:
- **Option 1**: Text file named `reviewadded` with cURL command + output
- **Option 2**: Screenshot named `8-reviewadded.png`

### How to Achieve:
1. **First, login** (Task 7) to get authenticated session

2. **Option 1 - Using cURL**:
   ```bash
   curl -X PUT "http://localhost:5000/customer/auth/review/1?review=This%20is%20a%20great%20book!" -b cookies.txt
   ```
   (The `-b cookies.txt` uses the saved session cookie from login)
   Save in `reviewadded`

3. **Option 2 - Using Postman**:
   - Method: PUT
   - URL: `http://localhost:5000/customer/auth/review/1?review=This is a great book!`
   - Make sure you're logged in (session cookie should be automatically saved)
   - Screenshot saved as `8-reviewadded.png`

---

## **TASK 9: Delete Book Review**

### What to Submit:
- **Option 1**: Text file named `deletereview` with cURL command + output
- **Option 2**: Screenshot named `9-deletereview.png`

### How to Achieve:
1. **First, ensure you have a review** (Task 8) and are logged in

2. **Option 1 - Using cURL**:
   ```bash
   curl -X DELETE http://localhost:5000/customer/auth/review/1 -b cookies.txt
   ```
   Save in `deletereview`

3. **Option 2 - Using Postman**:
   - Method: DELETE
   - URL: `http://localhost:5000/customer/auth/review/1`
   - Make sure you're logged in
   - Screenshot saved as `9-deletereview.png`

---

## **TASK 10: Get Books Using Promise/Async-Await**

### What to Submit:
- **Option 1**: Commit and push all changes to GitHub repository
- **Option 2**: Screenshot named `task10.png` showing the async endpoint working

### How to Achieve:
1. **Verify your code** in `general.js` has the async endpoint:
   - Route: `GET /async`
   - Should use Promise/Async-Await with Axios

2. **Option 1 - GitHub Submission**:
   ```bash
   git add .
   git commit -m "Task 10: Added async endpoint for getting all books"
   git push origin main
   ```

3. **Option 2 - Screenshot**:
   - Test endpoint: `GET http://localhost:5000/async`
   - Take screenshot showing request/response
   - Save as `task10.png`

---

## **TASK 11: Get Book by ISBN Using Promise/Async-Await**

### What to Submit:
- **Option 1**: Commit and push all changes to GitHub repository
- **Option 2**: Screenshot named `task11.png`

### How to Achieve:
1. **Verify your code** has the async ISBN endpoint:
   - Route: `GET /async/isbn/:isbn`

2. **Option 1 - GitHub Submission**:
   ```bash
   git add .
   git commit -m "Task 11: Added async endpoint for getting book by ISBN"
   git push origin main
   ```

3. **Option 2 - Screenshot**:
   - Test: `GET http://localhost:5000/async/isbn/1`
   - Screenshot saved as `task11.png`

---

## **TASK 12: Get Books by Author Using Promise/Async-Await**

### What to Submit:
- **Option 1**: Commit and push all changes to GitHub repository
- **Option 2**: Screenshot named `task12.png`

### How to Achieve:
1. **Verify your code** has the async author endpoint:
   - Route: `GET /async/author/:author`

2. **Option 1 - GitHub Submission**:
   ```bash
   git add .
   git commit -m "Task 12: Added async endpoint for getting books by author"
   git push origin main
   ```

3. **Option 2 - Screenshot**:
   - Test: `GET http://localhost:5000/async/author/Chinua Achebe`
   - Screenshot saved as `task12.png`

---

## **TASK 13: Get Books by Title Using Promise/Async-Await**

### What to Submit:
- **Option 1**: 
  - Commit and push all changes to GitHub repository
  - Copy the public GitHub URL of `general.js` and save it in a text file
  - Format: `https://github.com/<your-username>/expressBookReviews/blob/main/final_project/router/general.js`
- **Option 2**: Screenshot named `task13.png`

### How to Achieve:
1. **Verify your code** has the async title endpoint:
   - Route: `GET /async/title/:title`

2. **Option 1 - GitHub Submission**:
   ```bash
   git add .
   git commit -m "Task 13: Added async endpoint for getting books by title"
   git push origin main
   ```
   Then copy the GitHub URL of `general.js` and save it in a text file

3. **Option 2 - Screenshot**:
   - Test: `GET http://localhost:5000/async/title/Things Fall Apart`
   - Screenshot saved as `task13.png`

---

## **TASK 14: GitHub Repository Update**

### What to Submit:
- **Option 1**: Text file named `githubrepo` containing:
  - The cURL command to verify repository parent
  - The full output showing the parent repository
- **Option 2**: Your GitHub repository link

### How to Achieve:
1. **Ensure all changes are committed and pushed**:
   ```bash
   git add .
   git commit -m "Final project submission"
   git push origin main
   ```

2. **Option 1 - Verify Repository Parent**:
   ```bash
   curl -s https://api.github.com/repos/<your-github-username>/expressBookReviews | jq '.parent.full_name'
   ```
   Replace `<your-github-username>` with your actual GitHub username
   Save command + output in `githubrepo`

3. **Option 2 - Repository Link**:
   - Provide: `https://github.com/<your-username>/expressBookReviews`

---

## **Quick Reference: cURL Commands Summary**

```bash
# Task 1: Get all books
curl http://localhost:5000/

# Task 2: Get book by ISBN
curl http://localhost:5000/isbn/1

# Task 3: Get books by author
curl "http://localhost:5000/author/Chinua Achebe"

# Task 4: Get books by title
curl "http://localhost:5000/title/Things Fall Apart"

# Task 5: Get reviews
curl http://localhost:5000/review/1

# Task 6: Register
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"user1\",\"password\":\"pass1\"}"

# Task 7: Login (saves cookie)
curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d "{\"username\":\"user1\",\"password\":\"pass1\"}" -c cookies.txt

# Task 8: Add review (uses cookie)
curl -X PUT "http://localhost:5000/customer/auth/review/1?review=Great%20book!" -b cookies.txt

# Task 9: Delete review (uses cookie)
curl -X DELETE http://localhost:5000/customer/auth/review/1 -b cookies.txt

# Task 10-13: Async endpoints
curl http://localhost:5000/async
curl http://localhost:5000/async/isbn/1
curl "http://localhost:5000/async/author/Chinua Achebe"
curl "http://localhost:5000/async/title/Things Fall Apart"
```

---

## **Important Notes:**

1. **Server must be running** on port 5000 for all tests
2. **For authenticated routes (Tasks 7-9)**: You must login first and use session cookies
3. **For Option 1**: Always save both the cURL command AND its output in the text file
4. **For Option 2**: Screenshots should clearly show the request URL, method, and response
5. **GitHub**: Make sure your repository is public and properly forked from the original
