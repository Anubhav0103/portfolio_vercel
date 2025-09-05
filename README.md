# Anubhav Pandey - Personal Portfolio

This repository contains the source code for my personal portfolio website, designed to showcase my skills, projects, and professional experience as a Full Stack Developer. The site is built with modern web technologies, featuring a sleek, responsive design and interactive animations.

**[➡️ View Live Demo](https://anubhavo103.github.io/portfolio_vercel/)**

![Portfolio Screenshot](./src/assets/portfolio-screenshot.png) 
*(Note: You will need to add a screenshot named `portfolio-screenshot.png` to the `src/assets` folder for this image to display.)*

---

## 📋 Table of Contents

- [Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
- [🚢 Deployment](#-deployment)
- [🧑‍💻 Contact](#-contact)

---

## ✨ Features

- **Modern & Responsive Design:** A visually appealing interface built with Tailwind CSS that looks great on all devices, from mobile phones to desktops.
- **Interactive UI/UX:** Smooth animations and transitions powered by **Framer Motion** to create an engaging user experience.
- **Dynamic Content:** Features like an animated typing effect in the hero section and an auto-updating active link in the navbar.
- **Component-Based Architecture:** Built with React, the application is broken down into reusable and maintainable components for each section (Hero, About, Skills, etc.).
- **Functional Contact Form:** An integrated contact form using **EmailJS** that allows visitors to send messages directly to my inbox without a backend server.
- **One-Page Navigation:** Smooth scrolling and an intelligent navbar that highlights the user's current section on the page.

---

## 🛠️ Tech Stack

This portfolio is built with a modern and powerful set of technologies:

- **Frontend:**
  - **React:** A JavaScript library for building user interfaces.
  - **Vite:** A next-generation frontend tooling for fast development and optimized builds.
- **Styling:**
  - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Animation:**
  - **Framer Motion:** A production-ready motion library for React.
- **Icons:**
  - **React Icons:** A library for including popular icons in React projects.
- **Contact Form:**
  - **EmailJS:** A service to send emails directly from client-side JavaScript.
- **Deployment:**
  - **GitHub Pages:** Hosted directly from the GitHub repository.

---

## 📁 Project Structure

The project follows a component-based structure, making it organized and easy to navigate.

portfolio_vercel-main/
├── public/
│ └── favicon.ico
├── src/
│ ├── assets/
│ │ ├── profile.png
│ │ ├── group-chat.jpeg
│ │ ├── expense-tracker.jpeg
│ │ └── salon-booking.jpeg
│ ├── About.jsx
│ ├── App.jsx
│ ├── Contact.jsx
│ ├── Experience.jsx
│ ├── Footer.jsx
│ ├── Hero.jsx
│ ├── Navbar.jsx
│ ├── Projects.jsx
│ ├── Skills.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

---

## 🚀 Getting Started

To run this project locally on your machine, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or higher is recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Local Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Anubhav0103/portfolio_vercel.git
    cd portfolio_vercel-main
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    For the contact form to work, you need to create a `.env` file in the root of the project and add your EmailJS credentials. You can get these from your [EmailJS account dashboard](https://dashboard.emailjs.com/).

    ```env
    # .env

    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    *Note: The `VITE_` prefix is required for Vite to expose these variables to the frontend.*

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

    The application will now be running on `http://localhost:5173`.

---

## 🚢 Deployment

This project is configured for easy deployment to **GitHub Pages**.

1.  **Build the project:**
    This command compiles the React application into static files in the `dist` directory.
    ```sh
    npm run build
    ```

2.  **Deploy to GitHub Pages:**
    This script, defined in `package.json`, will push the contents of the `dist` folder to the `gh-pages` branch of your repository.
    ```sh
    npm run deploy
    ```
    Ensure that you have set up GitHub Pages to serve from the `gh-pages` branch in your repository settings.

---

## 🧑‍💻 Contact

- **Email:** [anubhav06cd@gmail.com](mailto:anubhav06cd@gmail.com)
- **LinkedIn:** [linkedin.com/in/anubhav-pandey-b9054b229](https://linkedin.com/in/anubhav-pandey-b9054b229)
- **GitHub:** [github.com/Anubhav0103](https://github.com/Anubhav0103)
