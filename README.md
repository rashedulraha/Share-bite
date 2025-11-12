# 🥗 ShareBite – Community Food Sharing Platform

**Project Type:** Full-Stack MERN Application

---

## 🌐 Live Links

- **Live Client Site:** []()
- **Server API:** []()

---

## 🧾 Project Description

**ShareBite** is a full-stack MERN (MongoDB, Express.js, React, Node.js) web application designed to reduce food waste by connecting community food donors and receivers.  
Users can **share surplus food**, **view available foods**, and **request food** directly through the platform.  
The project highlights **community service**, **sustainability**, and **food redistribution**.

---

## ✨ Website Features

1. 🏠 **Dynamic Home Page** – Hero Banner, Featured Foods, and animations using Framer Motion or AOS.
2. 🍱 **CRUD Functionality** – Add, Manage, Update, and Delete food items with MongoDB.
3. 🔐 **Authentication** – Secure login and registration with Firebase & Google Sign-In.
4. 🤝 **Food Request System** – Request food; donors can Accept or Reject requests.
5. ⚡ **Private Routes** – Only logged-in users can access Add Food, Manage Foods, and My Requests pages.
6. 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop using Tailwind CSS.
7. 🎨 **Consistent UI/UX** – Unified button, typography, and card design.
8. 🧭 **Toast & Alerts** – All success/error messages shown via SweetAlert or Toastify (no default alerts).
9. 🧩 **Protected API** – Firebase Access Token middleware for secure POST/PATCH/DELETE.
10. 🚀 **Error Handling** – 404 Error Page & Loading Spinner implemented.

---

## 🧱 Folder Structure

### 📁 Client Side (`/src`)

src/
┣ 📂 assets/ → Images and static resources
┣ 📂 Components/
┃ ┣ 📂 Layouts/ → Navbar, Footer, Main layout
┃ ┣ 📂 PrivetRoutes/ → PrivateRoute component for authentication protection
┃ ┣ 📂 Responsive/ → Responsive UI components
┃ ┣ 📂 shared/ → Reusable components (Buttons, Cards, etc.)
┃ ┣ 📂 Theme/ → Theme and color management
┃ ┣ 📂 Ui/ → UI elements (modals, loaders, etc.)
┣ 📂 Context/ → AuthContext and global providers
┣ 📂 Firebase/ → Firebase configuration files
┣ 📂 Hooks/ → Custom hooks (useAuth, useFoods, etc.)
┣ 📂 Pages/ → All application pages (Home, AddFood, ManageMyFoods, etc.)
┣ 📂 Routes/ → Route management and private route definitions
┣ 📄 index.css → Global CSS styles
┣ 📄 main.jsx → App entry file

### 📁 Public Folder

public/
┣ 📄 \_redirects → For Netlify SPA route handling

---

## ⚙️ Tech Stack

### 💻 Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- React Hook Form
- TanStack Query
- Framer Motion / AOS

### 🖥️ Backend

- Node.js
- Express.js
- MongoDB (Atlas)
- Firebase Access Token Middleware

---

## 🔑 Core Functionalities

### 👤 Authentication

- Email-password registration with validation.
- Google sign-in supported.
- Persistent login (no redirect after reload).

### 🍽️ Food Management

- Add Food (with image upload (imgbb)).
- Manage Foods – Update or Delete only by the food owner.
- Public “Available Foods” page.
- Private “Food Details” page with donor info.

### 📋 Food Request System

- Modal Form: Location, Reason, Contact No.
- Requests saved with status: ?
- Donor can Accept or Reject request.
- On Accept → Food status becomes “donated”.

---

## 🎨 UI Design Rules (Followed)

- Consistent heading, font, and color scheme.
- Equal-sized images and cards in grids.
- Proper alignment, spacing, and padding.
- New “X” logo for social links.
- 100% responsive for mobile, tablet, and desktop.

---

## 🧩 Additional Features

- Used **React Hook Form** for all forms.
- Used **TanStack Query** for fetching & caching.
- Used **SweetAlert2** and **React-Toastify** for all alerts.
- Firebase token middleware added for secure APIs.
- Smooth animations with **Framer Motion**.

---

## 🧠 Learning Outcomes

- Deep understanding of MERN stack workflow.
- Implemented Firebase authentication with JWT protection.
- Practical CRUD operation handling.
- UI/UX improvement through Tailwind and reusable components.
- Real-world problem solving with community-based project idea.

---

## 👨‍💻 Developed By

**Name:** [Rashedul islam ]  
**Assignment:** B12-A10_Category-0002  
**Project Title:** Community Food Sharing – ShareBite

---

## 📝 Short Description (for GitHub About Section)

> ShareBite is a full-stack MERN app connecting food donors and receivers to reduce waste. Users can share surplus food, browse available items, and request food easily — promoting sustainability and community care.
