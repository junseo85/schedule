import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPageForm = ({ studentToEdit }) => {
 
    const [name, setName]       = useState(studentToEdit.name);
    const [phone, setPhone]       = useState(studentToEdit.phone);
    const [email, setEmail]         = useState(studentToEdit.email);
    const [time, setTime]       = useState(studentToEdit.time);
    const [date, setDate] = useState(studentToEdit.date);
    
    const redirect = useNavigate();

    const editStudent = async () => {
        const response = await fetch(`/students/${studentToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                phone: phone, 
                email: email,
                time: time,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>what is your name?</legend>
                    <label for="name">name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" />
                    
                    <label for="phone">What's your phone number?</label>
                    <input
                        type="number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)} 
                        id="phone" />
                    <label for="email">What's your email address?</label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        id="email" />
                    
                    <label for="time">What time slot would you like to schedule?</label><input
                        type="number"
                        value={time}
                        onChange={e => setTime(e.target.value)} 
                        id="time" />

                    <label for="date">what day would you like to schedule?</label>
                    <input
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editStudent}
                        id="submit"
                    >Save</button> updates </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPageForm;