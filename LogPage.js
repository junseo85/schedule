import {React, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

//import components

import StudentList from '../components/StudentList.js';

// Change the function names and links
// to fit your portfolio topic.

function LogPage() {

    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    const loadStudent = async () => {
        const response = await fetch('/students');
        const data = await response.json();
        setStudent(data);
    }
    //UPDATE award log
    const onEditStudent = async updatestudent => {
        setStudent(updatestudent);
        navigate("/EditPage");
    }
    //DELETE award log
    const onDeleteStudent = async id => {
        const response = await fetch(`/students/${id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/students');
            const data = await getResponse.json();
            setStudent(data);
        } else {
            console.error('The row for id:${id} failed to delete due to (status code) = ${response.status}).')
        }
    }
    useEffect(() => {
        loadStudent();
    }, []);
    
    return (
    <>
        
        <article>
            <p> Here are scheduled lessons</p>
            <StudentList
                student={student}
                onDelete={onDeleteStudent}
                onEdit={onEditStudent}
            />    
        </article>
    </>
  );
}

export default LogPage;
