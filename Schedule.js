import StudentList from "../components/StudentList";
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

function ViewPage() {
    const navigate = useNavigate();
    const [students, setStudent] =useState([]);

    const loadStudents = async() => {
    const response = await fetch('/students');
    const data = await response.json();
    setStudent(data);
 }    
    
 useEffect(() => {
    loadStudents();  
 },[]);
 return (
        <>
            <h2>List of students</h2>
            <StudentList students={students}
                >
                
            </StudentList>
            <Link to="/">
            <button>
            back to the schedule page
            </button>   
            </Link>
        </>
    );
}

export default ViewPage;