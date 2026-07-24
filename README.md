# Stargazer

Stargazer is a React application that allows users to browse NASA's Astronomy Picture of the Day (APOD) archive. Users can explore historical images and videos from NASA, view additional information about each entry, and navigate through APOD content using date filtering, sorting, and pagination.

The project was built to demonstrate frontend development skills, focusing on React fundamentals, API integration, state management, component architecture, and handling asynchronous data.

---

## Features

* Browse NASA APOD entries from a selected date range
* Displays recent APOD entries by default
* Supports both image and video APOD entries
* Click on an APOD card to view additional details
* Loading states while fetching data
* Responsive card grid layout
* Date selection using a date picker
* Sort APOD entries by newest or oldest first
* Client-side pagination for browsing larger collections of entries

---

## Project Structure


```
src
├── components
│ ├── Date.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── Loading.jsx
│ ├── NasaModal.jsx
│ ├── Pagination.jsx
│ └── Sort.jsx
├── App.jsx
├── index.css
└── main.jsx
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

* Improve accessibility across the application
* Add improved error handling and user feedback for failed requests
* Improve empty states when no APOD entries are available
* Add the ability for users to bookmark or share specific APOD entries
* Replace modal views with dedicated routes for individual APOD entries
* Add scroll restoration when navigating between pagination pages

### Performance & Architecture

* Implement caching to reduce unnecessary API requests
* Move API requests to a server-side layer to protect API keys
* Reduce unnecessary API calls through improved data fetching strategies
* Migrate the application from React/Vite to Next.js for improved routing and server-side functionality

### Future Platform Improvements

* Add user authentication for personalised features
* Store user preferences and saved entries in a database
* Expand towards a full-stack architecture

---

## Known Limitations

* API requests are currently handled client-side. A server-side API layer would provide better security and control over API key handling before production use
* Pagination currently works client-side and may need server-side handling if the dataset grows significantly
* Some advanced accessibility improvements are planned for future iterations

---

## Screenshots

Coming soon.

---

## What I Learned

Through building Stargazer, I improved my understanding of:

* Fetching and working with external APIs
* Managing asynchronous operations in React
* Using state and props to control UI behaviour
* Building reusable components
* Conditional rendering based on application state
* Rendering dynamic data using JavaScript array methods
* Implementing client-side pagination
* Styling responsive interfaces using Tailwind CSS

---

## Author

Created by Amir

Portfolio: https://createdbyamir.com/