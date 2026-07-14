/*UseEffect - run this code when the component loads */
import { useEffect, useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm"
import StudentTable from "./components/StudentTable";
import {getAllStudents, deleteStudent} from "./services/studentService";
function App() {
    const [students, setStudents] = useState([]);
    const[selectedStudent, setSelectedStudent] = useState(null);
    const handleEdit = (student) => {
        setSelectedStudent(student);
        };
    const loadStudents = () => {
        getAllStudents().then((response) => {
            setStudents(response.data);
            })
        .catch((error) => {
            console.error(error);
            });
    };
const handleDelete = (id) => {
    deleteStudent(id).then(() => {
        loadStudents();
            })
    .catch((error) => {
        console.log(error);
        });
};

useEffect(() => loadStudents(), []);
    return(
        <div className="app-container">
        <h1 className="title">Student Management System</h1>
        <StudentTable students={students} onDelete={handleDelete} onEdit={handleEdit}/>
        <StudentForm onStudentAdded={loadStudents} selectedStudent={selectedStudent}/>
        </div>
        );

}

export default App;