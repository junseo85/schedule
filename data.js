import Records from './calendar_name.json';
import React from 'react'
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
    ///display calendar with actual name using microservice(from my own)
 useEffect(() => {
    loadStudents();  
 },[]);
 return (
        <>
        <div className='d-flex'>
            {Records.map((date, index) =>(
                <div className='border' key={index}>
                    <table>
                        <thead>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3:00-4:00</td>
                            <td><input type="radio"></input>{date.Monday[3]}</td>
                            <td><input type="radio"></input>{date.Tuesday[3]}</td>
                            <td><input type="radio"></input>{date.Wednesday[3]}</td>
                            <td><input type="radio"></input>{date.Thursday[3]}</td>
                            <td><input type="radio"></input>{date.Friday[3]}</td>
                            <td><input type="radio"></input>{date.Saturday[3]}</td>
                            <td><input type="radio"></input>{date.Sunday[3]}</td>
                        </tr>
                        <tr>
                            <td>4:00-5:00</td>
                            <td><input type="radio"></input>{date.Monday[4]}</td>
                            <td><input type="radio"></input>{date.Tuesday[4]}</td>
                            <td><input type="radio"></input>{date.Wednesday[4]}</td>
                            <td><input type="radio"></input>{date.Thursday[4]}</td>
                            <td><input type="radio"></input>{date.Friday[4]}</td>
                            <td><input type="radio"></input>{date.Saturday[4]}</td>
                            <td><input type="radio"></input>{date.Sunday[4]}</td>
                        </tr>
                        <tr>
                            <td>5:00-6:00</td>
                            <td><input type="radio"></input>{date.Monday[5]}</td>
                            <td><input type="radio"></input>{date.Tuesday[5]}</td>
                            <td><input type="radio"></input>{date.Wednesday[5]}</td>
                            <td><input type="radio"></input>{date.Thursday[5]}</td>
                            <td><input type="radio"></input>{date.Friday[5]}</td>
                            <td><input type="radio"></input>{date.Saturday[5]}</td>
                            <td><input type="radio"></input>{date.Sunday[5]}</td>
                        </tr>
                        <tr>
                            <td>6:00-7:00</td>
                            <td><input type="radio"></input>{date.Monday[6]}</td>
                            <td><input type="radio"></input>{date.Tuesday[6]}</td>
                            <td><input type="radio"></input>{date.Wednesday[6]}</td>
                            <td><input type="radio"></input>{date.Thursday[6]}</td>
                            <td><input type="radio"></input>{date.Friday[6]}</td>
                            <td><input type="radio"></input>{date.Saturday[6]}</td>
                            <td><input type="radio"></input>{date.Sunday[6]}</td>
                        </tr>
                        <tr>
                            <td>7:00-8:00</td>
                            <td><input type="radio"></input>{date.Monday[7]}</td>
                            <td><input type="radio"></input>{date.Tuesday[7]}</td>
                            <td><input type="radio"></input>{date.Wednesday[7]}</td>
                            <td><input type="radio"></input>{date.Thursday[7]}</td>
                            <td><input type="radio"></input>{date.Friday[7]}</td>
                            <td><input type="radio"></input>{date.Saturday[7]}</td>
                            <td><input type="radio"></input>{date.Sunday[7]}</td>
                            
                        </tr>
                        <tr>
                            <td>8:00-9:00</td>
                            <td><input type="radio"></input>{date.Monday[8]}</td>
                            <td><input type="radio"></input>{date.Tuesday[8]}</td>
                            <td><input type="radio"></input>{date.Wednesday[8]}</td>
                            <td><input type="radio"></input>{date.Thursday[8]}</td>
                            <td><input type="radio"></input>{date.Friday[8]}</td>
                            <td><input type="radio"></input>{date.Saturday[8]}</td>
                            <td><input type="radio"></input>{date.Sunday[8]}</td>
                        </tr>
            
                         </tbody>
                    </table>
                    
                </div>
            ))}
        
        </div>
            <h2>List of students</h2>
            <StudentList students={students}>
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