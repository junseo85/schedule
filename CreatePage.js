import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';



export const CreatePage =() => {
    const [day, setDay] = useState('day');
    const [time, setTime] = useState('time');
    const [name, setName] = useState('name');
    
    

    const navigate = useNavigate();

    const addStudent = async () => {
        const newStudent = { day, time, name };

        const response = await fetch('/students', {
                method: 'POST',
                body: JSON.stringify(newStudent),
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        if(response.status === 201){
            
            alert("Thank you for sharing your success!");
        } else{
            
            alert(`That input failed, due to missing data status code = ${response.status}`);
        }
        navigate("/LogPage");
    };
    return (
        <>
        <h2>schedule</h2>
        <article>
        <p>Teaching schedule</p>
        <table id="students">
            <caption>Schedule</caption>
            
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td><label for="day" >
                        <input type="text" value={day} id="day" name="day"
                                onChange={e => setDay(e.target.value)} 
                        />
                        </label>
                    </td>
                    <td><label for="time" >
                        <input
                            type="time"
                            value={time}
                            id="time"
                            name="time"
                            onChange={e => setTime(e.target.value)} 
                           
                            />
                        </label></td>
                    <td><label for="name" >
                        <input
                            type="text"
                            value={name}
                            id="name"
                            name="name"
                            onChange={e => setName(e.target.value)} />
                        </label></td>
                    
                        <td><label for="submit"><button class="submit" onClick={addStudent} id="submit">Save</button></label></td>
                </tr>
            </tbody>
        </table>
        </article>
        </>
    );
}

export default CreatePage;