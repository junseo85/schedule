import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const redirect = useNavigate();

    const submitHandler = async() => {
        
        const newStudent = {name,date,time,phone,email};
        const response = await fetch('/students',{
            method: 'POST',
            body: JSON.stringify(newStudent),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if(response.status ===201){
            alert("Thank you for scheduling");
        } else{
            alert('something went wrong. Please try again')
        }
        
        redirect("/Schedule");
    };

    return (
        <>
        <table>
          <thead>
            <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
    
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>3:00-4:00</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
            </tr>
            <tr>
                <td>4:00-5:00</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
            </tr>
            <tr>
                <td>5:00-6:00</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
            </tr>
            <tr>
                <td>6:00-7:00</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
            </tr>
            <tr>
                <td>7:00-8:00</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                    <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
            </tr>
            <tr>
                <td>8:00-9:00</td>
                <td>BLOCK</td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
                <td>BLOCK</td>
                <td><label><input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label></td>
            </tr>
          </tbody>
          
        </table>
            <h1>Contact Page</h1>
            <form>
                <fieldset>
                    <legend>Your Details</legend>
                    <label>Please enter your name
                        <input type="text" value={name}
                            onChange={e => setName(e.target.value)} />
                    </label>
                    <p></p>
                    <label>Please enter your phone number
                        <input type="text" value={phone}
                            onChange={e => setPhone(e.target.value)} />
                    </label>
                    <p></p>
                    <label>Please enter your email
                        <input type="text" value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </label>
                    <p></p>
                    <label>Please enter the day you would like to schedule
                        <input type="text" value={date}
                            onChange={e => setDate(e.target.value)} />
                    </label>
                    <p></p>
                    <label>Please enter time slot
                        <input type="text" value={time}
                            onChange={e => setTime(e.target.value)} />
                    </label>
                </fieldset>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
            <Link to="/Schedule">
            <button>
            Click to see the schedule
            </button>   
            </Link>
        </>
    );
}
export default ContactPage;