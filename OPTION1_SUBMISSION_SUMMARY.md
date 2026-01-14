# Option 1 Submission Files - Summary

All cURL commands have been executed and submission files have been created.

## ✅ Completed Tasks

### Task 1: Get All Books
- **File**: `getallbooks`
- **Status**: ✅ Created
- **Command**: `curl http://localhost:5000/`

### Task 2: Get Book by ISBN
- **File**: `getbooksbyISBN`
- **Status**: ✅ Created
- **Command**: `curl http://localhost:5000/isbn/1`

### Task 3: Get Books by Author
- **File**: `getbooksbyauthor`
- **Status**: ✅ Created
- **Command**: `curl "http://localhost:5000/author/Chinua Achebe"`

### Task 4: Get Books by Title
- **File**: `getbooksbytitle`
- **Status**: ✅ Created
- **Command**: `curl "http://localhost:5000/title/Things Fall Apart"`

### Task 5: Get Book Reviews
- **File**: `getbookreview`
- **Status**: ✅ Created
- **Command**: `curl http://localhost:5000/review/1`

### Task 6: Register New User
- **File**: `register`
- **Status**: ✅ Created
- **Command**: `curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}"`

### Task 7: Login
- **File**: `login`
- **Status**: ✅ Created
- **Command**: `curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d "{\"username\":\"testuser\",\"password\":\"testpass\"}" -c cookies.txt`
- **Note**: Session cookie saved in `cookies.txt`

### Task 8: Add/Modify Review
- **File**: `reviewadded`
- **Status**: ✅ Created
- **Command**: `curl -X PUT "http://localhost:5000/customer/auth/review/1?review=This%20is%20a%20great%20book!" -b cookies.txt`

### Task 9: Delete Review
- **File**: `deletereview`
- **Status**: ✅ Created
- **Command**: `curl -X DELETE http://localhost:5000/customer/auth/review/1 -b cookies.txt`

### Tasks 10-13: Async Endpoints
- **Status**: ✅ Committed and pushed to GitHub
- **Repository**: https://github.com/t-simwa/expressBookReviews
- **Commits**: 
  - "Tasks 10-13: Added async endpoints using Promise/Async-Await for getting books"
  - "Updated authentication and dependencies"

### Task 13: GitHub URL of general.js
- **File**: `task13_generaljs_url.txt`
- **Status**: ✅ Created
- **URL**: https://github.com/t-simwa/expressBookReviews/blob/main/final_project/router/general.js

### Task 14: GitHub Repository Verification
- **File**: `githubrepo`
- **Status**: ✅ Created
- **Command**: `curl -s https://api.github.com/repos/t-simwa/expressBookReviews | jq '.parent.full_name'`
- **Output**: `ibm-developer-skills-network/expressBookReviews`

## 📁 All Submission Files Location

All files are located in: `C:\Users\Ted Simwa\Desktop\expressBookReviews\`

## 📝 File Format

Each file contains:
1. The cURL command (first line)
2. The JSON output from the server (subsequent lines)

## ✅ Ready for Submission

All required files for Option 1 (AI-Graded Submission) have been created and are ready for submission!
