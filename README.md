## WanderLust 🏡

<p align="center">
  <b>Airbnb-style CRUD app for travel listings built with Express, EJS, and MongoDB</b><br>
  <i>Create, edit, and browse listings with a clean, server-rendered UI</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/EJS-9C27B0?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Responsive-Yes-1bd760?style=for-the-badge"/>
</p>

---

### ✨ Overview

WanderLust is a simple, educational clone of an Airbnb-style listings app. It demonstrates a classic MVC Express setup with EJS templates, MongoDB/Mongoose models, and Bootstrap-based styling. You can create, read, update, and delete listings and optionally seed the database with sample data.

---

### 📸 Screenshots

<p align="center">
  <img src="assets/allListings.png" alt="All Listings page" width="85%" />
  <br>
  <em>All Listings</em>
</p>

<p align="center">
  <img src="assets/view.png" alt="Listing details page" width="85%" />
  <br>
  <em>Listing Details</em>
</p>

<p align="center">
  <img src="assets/new.png" alt="Create new listing page" width="85%" />
  <br>
  <em>Create New Listing</em>
</p>

---

### 🚀 Features

- **CRUD listings**: create, view, edit, and delete
- **Server-rendered pages** with EJS and `ejs-mate` layouts
- **Bootstrap 5** UI with icons via Bootstrap Icons / Font Awesome (CDN)
- **MongoDB** persistence with Mongoose models
- **Simple seeding** script to populate sample data

---

### 🛠️ Tech Stack

- **Node.js + Express** – server and routing
- **MongoDB + Mongoose** – data storage and schema modeling
- **EJS** – server-side templating with layout support from `ejs-mate`
- **Bootstrap 5** – responsive UI; Bootstrap Icons / Font Awesome via CDN

---

### 📁 Project Structure

```
MajorProjects/
├── app.js                  # Express app entry
├── init/
│   ├── data.js            # Sample listings
│   └── index.js           # Seeder script
├── models/
│   └── listing.js         # Mongoose Listing schema
├── public/
│   └── style.css          # Global styles
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── bolierplate.ejs
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
├── package.json
└── README.md
```

---

- **Layout**: `views/layouts/bolierplate.ejs` (with `ejs-mate`)
- **Partials**: `views/includes/navbar.ejs`, `views/includes/footer.ejs`
- **Pages**: `views/listings/index.ejs`, `new.ejs`, `show.ejs`, `edit.ejs`
- **Styles**: `public/style.css`

---

### 📄 License

ISC (see `package.json`).

---

<p align="center">
  <b>Happy traveling with WanderLust! ⭐️</b>
</p>
