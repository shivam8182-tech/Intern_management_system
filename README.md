# Intern Management System

A simple **Intern Management System** built using **React.js** to manage intern/student information.

This project is mainly focused on implementing **CRUD (Create, Read, Update, Delete) operations** in a React frontend application. It provides a simple interface to add, view, update, and delete intern details.

## 📌 Project Overview

The Intern Management System allows users to manage student/intern records through a frontend application.

The application provides the following operations:

* **Create** – Add a new student as an intern
* **Read** – View the list of registered interns
* **Update** – Edit and update intern information
* **Delete** – Remove an intern from the list

This project is developed for learning and practicing **React.js concepts, CRUD operations, state management, forms, and component-based development**.

> **Note:** This project contains only the frontend part. There is no backend or database. Intern data is temporarily stored in a JavaScript variable/state, so the data will be lost when the application is refreshed.

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* Vite
* React Hooks
* Git & GitHub

## ✨ Features

### 1. Add Intern

Users can add a new student as an intern by providing the required information through a form.

Example details may include:

* Intern ID
* Student Name
* Email
* Phone Number
* Course
* College/University
* Internship Duration
* Department

### 2. View Interns

The application displays all registered interns in a table/list format.

Users can view the available intern information from the frontend.

### 3. Update Intern

Users can edit the existing intern details and update the information.

### 4. Delete Intern

Users can delete an intern record from the list.

### 5. Frontend Only

This project does not use:

* Backend server
* REST API
* Database

The intern data is maintained in a JavaScript variable/React state.

## 🔄 CRUD Operations

The main functionality of this application is CRUD:

```text
Create  → Add a new intern
Read    → Display intern details
Update  → Modify intern details
Delete  → Remove an intern
```

## 📂 Project Structure

A basic project structure can look like this:

```text
intern-management-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── InternForm.jsx
│   │   ├── InternList.jsx
│   │   └── InternTable.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
```

### Step 2: Navigate to the Project

```bash
cd intern-management-system
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

## 📝 Example Intern Data

The application may initially contain data similar to:

```javascript
const interns = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    course: "BCA",
    college: "ABC College",
    duration: "3 Months"
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "9876543211",
    course: "MCA",
    college: "XYZ University",
    duration: "6 Months"
  }
];
```

## 🎯 Learning Objectives

This project helps in understanding:

* React components
* JSX
* Props
* `useState`
* Event handling
* Form handling
* Controlled components
* Array methods such as `map()`, `filter()`
* Object and array updates
* Conditional rendering
* CRUD operations
* Component communication
* Basic React project structure

## 🔮 Future Improvements

The project can be extended in the future by adding:

* Backend integration
* Database integration
* REST API
* Authentication and authorization
* Search an
