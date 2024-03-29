import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Records from './calendar.json';
import FetchData from './data';


function HomePage(e) {
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
    }
    
    function refreshPage() {
        const cal = require("./data");
        console.log(cal)
        window.location.reload(false);
      };
    return (
        
    /// display calendar using microservice( show "OPEN" or "BLOCK")
    <div className="HomePage">
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
        <script type="module" src="./data.js"></script>
        <div>
      <button onClick={refreshPage}>Click to Undo</button>
        </div>
        <Link to="/Datapage">
            <p>show updated schedule</p>
            
        </Link>
        <h4>*click available open spot to schedule a make up lesson</h4>
    
        <h2>Prefer traditional way of scheduling?</h2>
        <Link to="/contact">
         <button>
            Click
        </button>   
        </Link>
        <h2>list of schedule</h2>
        <Link to="/Schedule">
         <button>
            Click
        </button>   
        </Link>
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
                        <input type="text" value={date} id="date"
                            onChange={e => setDate(e.target.value)} />
                    </label>
                    <p></p>
                    <label>Please enter time slot
                        <input type="text" value={time}
                            onChange={e => setTime(e.target.value)} />
                    </label>
                    <p>* if time slot does not work, please submit with blank on time slot and wait for instructor to contact you directly.</p>
            </fieldset>
            <button type="submit" onClick={submitHandler}>Submit</button>
        </form>
    </div>
    
    );
    }
   

    export default HomePage; 