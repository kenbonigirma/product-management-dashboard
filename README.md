# Nexus Store 🛍️

A React-based product management dashboard built with **React, React Router, Tailwind CSS, and DummyJSON**.

## Features

* 🏠 Home page with featured products
* 🛍️ Products page with products fetched from DummyJSON API
* 🔍 Search products by title
* 🏷️ Filter products by category
* 📄 Product details page
* 🛒 Shopping cart with quantity controls
* ❤️ Wishlist functionality
* ℹ️ About page
* 📩 Contact form
* 🔐 Login page
* 🧭 Navigation with React Router
* 📱 Responsive design
* ⏳ Loading and error states
* 🌐 API-based product data

## Technologies

* React
* React Router
* Tailwind CSS
* JavaScript
* DummyJSON API
* Vite

## API

Products are fetched from the DummyJSON Products API:

`https://dummyjson.com/products`

The API response contains a `products` array, which is used by the application to display product information.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/kenbonigirma/product-management-dashboard.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── pages/
├── services/
├── App.jsx
├── main.jsx
└── index.css
```

### Main Folders

* **components/** – Reusable UI components such as Navbar, Footer, ProductCard, SearchBar, and CategoryFilter.
* **pages/** – Application pages such as Home, Products, Product Details, About, Contact, Login, Cart, and Wishlist.
* **context/** – React Context used for shared application state such as the cart and wishlist.
* **services/** – API-related functions used to fetch product data.
* **assets/** – Images and other static resources.

## Routing

The application uses **React Router** for navigation between pages.

Main routes include:

* `/` – Home
* `/products` – Products
* `/products/:id` – Product Details
* `/about` – About
* `/contact` – Contact
* `/login` – Login
* `/cart` – Cart
* `/wishlist` – Wishlist

## Team Project

This project was developed as a **group React assignment**.

The project focuses on practicing:

* React components
* Props and state
* React hooks
* React Router
* API integration
* Search and filtering
* Responsive UI development
* Git and GitHub collaboration
* Feature branches and pull requests
* Code reviews and merge conflict resolution

## Additional Features

In addition to the core assignment requirements, the team implemented additional functionality including:

* Product details and dynamic product routes
* Shopping cart functionality
* Wishlist functionality
* Shared state using React Context


