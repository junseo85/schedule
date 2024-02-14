import React from 'react';

import {Link} from "react-router-dom";
import Student from './Student';
//import { GoTrash, GoPlusCircle, GoFileDiff } from "react-icons/go";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function StudentList({ students, onDelete, onEdit }) {
    return (
        <table id="students">
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>Time</th>
                    <th>date</th>
                    <td><button onClick={() => onDelete(students._id)} /></td>
                    <td><button onClick={() => onEdit(students)} /></td>
                    <th><Link to="/CreatePage"><i><button title="Add new student log"></button></i></Link></th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, i) => 
                    <Student 
                    student={student} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default StudentList;
