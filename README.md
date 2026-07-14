# 🎓 Student Management System

A Full Stack **Student Management System** built using **React**, **Spring Boot**, and **MySQL**. The application allows users to manage student records through a clean web interface by performing complete CRUD (Create, Read, Update, and Delete) operations.

---

## 📸 Application Preview

![Student Management System](./screenshots/home.png)

---

## ✨ Features

- ➕ Add a new student
- 📋 View all students
- ✏️ Update student information
- 🗑️ Delete student records
- 🔄 Real-time UI updates after CRUD operations
- 🌐 REST API integration using Axios
- 💾 Data persistence with MySQL

---

## 🛠️ Tech Stack

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

## 📂 Project Structure

```text
student-management-system
│
├── .mvn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ashwin/sms/sms
│   │   │       ├── controller/
│   │   │       ├── entity/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       └── SmsApplication.java
│   │   │
│   │   └── resources/
│   │
│   └── test/
│
├── student-management-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentTable.jsx
│   │   │
│   │   ├── services/
│   │   │   └── StudentService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/0-ashwin-nair-0/student-management-system.git
```

---

### 2️⃣ Backend Setup

```bash
cd student-management-system
```

Create a MySQL database

```sql
CREATE DATABASE sms_db;
```

Update the database configuration in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sms_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

---

### 3️⃣ Frontend Setup

```bash
cd student-management-frontend

npm install

npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/students` | Retrieve all students |
| GET | `/students/{id}` | Retrieve a student by ID |
| POST | `/students` | Add a new student |
| PUT | `/students/{id}` | Update an existing student |
| DELETE | `/students/{id}` | Delete a student |

---

## 📖 What I Learned

During this project, I gained practical experience with:

- React Components
- React Hooks (`useState`, `useEffect`)
- Component Communication using Props
- Axios for API Integration
- RESTful API Development
- Spring Boot Architecture
- Spring Data JPA
- MySQL Database Integration
- CRUD Operations
- Full Stack Development Workflow

---

## 🚀 Future Improvements

- 🔐 User Authentication (JWT)
- 🔍 Search Students
- 📄 Pagination
- 📊 Dashboard & Statistics
- ✅ Form Validation
- 📱 Responsive UI
- 🐳 Docker Support

---

## 👨‍💻 Author

**Ashwin Nair**

- GitHub: https://github.com/0-ashwin-nair-0

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
