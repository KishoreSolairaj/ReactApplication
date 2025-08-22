# React E-commerce Application

A simple and modular **React** e-commerce application that uses **Redux** for state management. The application demonstrates routing, centralized data handling, and a clean component structure. It includes all essential pages like landing, products, cart, checkout, and more.

---
## Live Links

-  **GitHub Repository**: [KishoreSolairaj/AngularApplication](https://github.com/KishoreSolairaj/ReactApplication.git)  
- **LinkedIn Profile**: [Kishore Solairaj](https://www.linkedin.com/in/kishoresolairaj/)

---

## Tech Stack

- **React** (with functional components & hooks)
- **Redux Toolkit**
- **React Router**
- **TypeScript**
- **SCSS / CSS Modules** (optional)
- **Vite / CRA** (assumes one of them is used for setup)

---

## Features

- Landing Page
- Products Listing
- Product Description
- Add to Cart functionality
- Cart Management
- Checkout Page
- Contact Form
- About Page
- Header & Footer components

---

## Project Structure

src/
├── components/
│ ├── About/
│ ├── Cart/
│ ├── Checkout/
│ ├── Contact/
│ ├── Footer/
│ ├── Header/
│ ├── LandingPage/
│ ├── ProductDescription/
│ └── Products/
│
├── models/ # TypeScript interfaces & types
├── redux/ # Redux store, slices, and selectors
│ ├── store.ts
│ └── cartSlice.ts
│
├── services/
│ └── routes.tsx # Application route definitions
│
└── App.tsx # Main app component

---

##  Getting Started

### 1. Clone the Repository

git https://github.com/KishoreSolairaj/ReactApplication.git
cd ReactApplication

### 2. Install Dependencies
To install the dependencies: npm install


### 3. Run the Development Server
To run the project: npm run start