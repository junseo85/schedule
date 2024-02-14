import React from 'react';

function Student({student}) {
    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.time}</td>
            <td>{student.date}</td>
            <td>Delete</td>
            <td>Edit</td>
        </tr>
    );
}

export default Student;