# Submission Checklist

## Option 1: AI-Graded Submission Files Needed

- [ ] `getallbooks` - cURL command + output for Task 1
- [ ] `getbooksbyISBN` - cURL command + output for Task 2
- [ ] `getbooksbyauthor` - cURL command + output for Task 3
- [ ] `getbooksbytitle` - cURL command + output for Task 4
- [ ] `getbookreview` - cURL command + output for Task 5
- [ ] `register` - cURL command + output for Task 6
- [ ] `login` - cURL command + output for Task 7
- [ ] `reviewadded` - cURL command + output for Task 8
- [ ] `deletereview` - cURL command + output for Task 9
- [ ] GitHub repository with Tasks 10-13 committed and pushed
- [ ] Text file with GitHub URL of `general.js` (for Task 13)
- [ ] `githubrepo` - cURL command + output for Task 14

## Option 2: Peer-Graded Submission Files Needed

- [ ] `1-getallbooks.png` - Screenshot for Task 1
- [ ] `2-getbooksbyISBN.png` - Screenshot for Task 2
- [ ] `3-getbooksbyauthor.png` - Screenshot for Task 3
- [ ] `4-getbooksbytitle.png` - Screenshot for Task 4
- [ ] `5-getbookreview.png` - Screenshot for Task 5
- [ ] `6-register.png` - Screenshot for Task 6
- [ ] `7-login.png` - Screenshot for Task 7
- [ ] `8-reviewadded.png` - Screenshot for Task 8
- [ ] `9-deletereview.png` - Screenshot for Task 9
- [ ] `task10.png` - Screenshot for Task 10
- [ ] `task11.png` - Screenshot for Task 11
- [ ] `task12.png` - Screenshot for Task 12
- [ ] `task13.png` - Screenshot for Task 13
- [ ] GitHub repository link for Task 14

## Testing Order (Important!)

1. **Start Server**: `npm start` in `final_project` directory
2. **Tasks 1-5**: Can be tested immediately (public endpoints)
3. **Task 6**: Register a user first
4. **Task 7**: Login with registered user (saves session)
5. **Task 8**: Add review (requires login from Task 7)
6. **Task 9**: Delete review (requires login and existing review)
7. **Tasks 10-13**: Test async endpoints
8. **Task 14**: Final GitHub push and verification
