import { useState, useEffect } from "react";
import {
    addStudent,
    updateStudent
} from "../services/studentService";
function StudentForm({onStudentAdded, selectedStudent}){

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[course, setCourse] = useState("")
    useEffect(() => {
            if (selectedStudent) {
                setName(selectedStudent.name);
                setEmail(selectedStudent.email);
                setCourse(selectedStudent.course);

            }
        }, [selectedStudent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = {name, email, course};
if(selectedStudent){
    updateStudent(selectedStudent.id, student).then(() => {
        onStudentAdded();
        setName("");
        setEmail("");
        setCourse("");
        })
    .catch((error) => {
        console.log(error);
        });
    }
else{
        addStudent(student).then(() => {
            onStudentAdded();
            setName("");
            setEmail("");
            setCourse("");
            })
        .catch((error) => {
            console.log(error);
            });
        }
};
    return(
        <div className="form-container">
        <h2 id="title">Add Student</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <br />

                  <div className="form-group">
                      <label>Email</label><br/>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                      <br />


                  <div className="form-group">
                      <label>Course</label>
                      <input type="text" value={course} onChange={(e) => setCourse(e.target.value)}/>
                      </div>
                      <br />
<div className="button-container">
                   <button type="submit">{selectedStudent ? <b>Update Student</b> : <b>Add Student</b> }</button></div>
                   </form>

                    </div>

        );
    }
export default StudentForm;