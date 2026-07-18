# Stargazer

Stargazer is a React application that allows users to browse NASA's Astronomy Picture of the Day (APOD) archive. Users can explore images and videos from NASA, view additional information about each entry, and navigate through historical APOD content.

The project was built to strengthen React fundamentals, working with APIs, state management, component structure, and handling asynchronous data.

---

## Features

* Browse NASA APOD entries from a selected date range
* Displays recent APOD entries by default
* Supports both image and video APOD entries
* Click on an APOD card to view additional details
* Loading indicator while fetching data
* Responsive card grid layout
* Date selection using a date picker
* Automatically sorts APOD entries from newest to oldest

---

## Project Structure

```
src
├── App.jsx
├── index.css
├── main.jsx
├── Loading.jsx
├── Nasa.jsx
├── NasaModal.jsx
└── Date.jsx
```

---

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* NASA APOD API
* React Datepicker
* React Icons
* Vite

---

## Future Improvements

### User Experience

* Allow users to choose how many APOD entries are displayed (5, 10, 25, 50, 100)
* Improve mobile responsiveness and accessibility
* Add better error handling for failed API requests
* Improve loading and empty states
* Allow users to bookmark or share specific APOD entries
* Replace the modal view with dedicated routes for individual APOD entries

### Data & Performance

* Limit API requests and improve data handling
* Store fetched APOD data on a backend server rather than relying entirely on client-side fetching
* Implement caching to reduce unnecessary API calls
* Add user preferences that can persist between sessions
* Create a server-side API layer to manage NASA API requests and protect API keys

### Future Platform Improvements

* Move from a client-only application towards a full-stack architecture
* Add a database for storing user preferences and saved APOD entries
* Add authentication for personalised features
* Improve scalability for handling larger numbers of users

---

## Screenshots

Coming soon.

---

## Notes

This project is currently focused on learning and improving React fundamentals, including:

* Working with external APIs
* Managing state with React hooks
* Handling asynchronous operations
* Building reusable components
* Understanding data transformation and rendering patterns


## What I Learned

---

Through building Stargazer, I improved my understanding of:

* Fetching and working with external APIs
* Managing asynchronous operations in React
* Using state and props to control UI behaviour
* Conditional rendering based on API responses
* Creating reusable components
* Styling applications using Tailwind CSS

---

## Author

---

Created by Amir

Portfolio: https://createdbyamir.com/
