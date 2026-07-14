function StudentTable({students, onDelete, onEdit}){
     return (
            <div className="table-container">

                <p>Total Students:<b> {students.length}</b></p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {students.map((student) => (

                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.course}</td>
                                <td><button onClick={() => onDelete(student.id)}>Delete</button>
                                <button onClick={() => onEdit(student)}>Edit</button></td>
                            </tr>

                        ))}

                    </tbody>

                </table>
            </div>
        );
    }
export default StudentTable;
