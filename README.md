# 🎓 Student Management System

A full-stack Student Management System built using **React**, **Spring Boot**, and **MySQL**.

The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on student records through a modern web interface.

---

## 🚀 Features

- ✅ Add Student
- ✅ View All Students
- ✅ Update Student Details
- ✅ Delete Student
- ✅ Responsive User Interface
- ✅ RESTful API Integration
- ✅ MySQL Database Connectivity

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Maven

### Database
- MySQL

---

## 📷 Screenshots

### Home Page

![Home](screenshots/home.png)

### Add Student

![Add Student](screenshots/add-student.png)

### Edit Student

![Edit Student](screenshots/edit-student.png)

---

## 📁 Project Structure

```
student-management-system
│
├── backend
├── frontend
├── screenshots
└── README.md
```

---

## ⚙️ Installation

### Backend

```bash
cd backend

mvn spring-boot:run
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Database

Create a database

```sql
CREATE DATABASE sms_db;
```

Update the database configuration in

```
application.properties
```

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sms_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

---

## REST APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /students | Get All Students |
| GET | /students/{id} | Get Student By ID |
| POST | /students | Add Student |
| PUT | /students/{id} | Update Student |
| DELETE | /students/{id} | Delete Student |

---

## Learning Outcomes

This project helped me understand:

- React Components
- React Hooks
- Axios API Calls
- Spring Boot REST APIs
- MVC Architecture
- CRUD Operations
- MySQL Integration
- Component Communication using Props
- State Management using useState
- Side Effects using useEffect

---

## Future Improvements

- Authentication & Login
- Search Students
- Pagination
- Sorting
- Validation
- Docker Deployment
- JWT Authentication

---

## Author

Ashwin

GitHub: https://github.com/YOUR_USERNAME
