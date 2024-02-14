// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as students from './students-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/students', (req,res) => { 
    students.createStudent(
        req.body.name, 
        req.body.phone, 
        req.body.email,
        req.body.time,
        req.body.date
        )
        .then(student => {
            res.status(201).json(student);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Unique and specific error message.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/students', (req, res) => {
    students.retrieveStudents()
        .then(student => { 
            if (student !== null) {
                res.json(student);
            } else {
                res.status(404).json({ Error: 'Unique and specific error message.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unique and specific error message.' });
        });
});


// RETRIEVE by ID controller
app.get('/students/:_id', (req, res) => {
    students.retrieveStudentByID(req.params._id)
    .then(student => { 
        if (student !== null) {
            res.json(student);
        } else {
            res.status(404).json({ Error: 'Unique and specific error message.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unique and specific error message.' });
    });

});


// UPDATE controller ************************************
app.put('/students/:_id', (req, res) => {
    students.updateStudent(
        req.params._id, 
        req.body.name, 
        req.body.phone, 
        req.body.email,
        req.body.time,
        req.body.date
    )
    .then(student => {
        res.json(student);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Unique and specific error message.' });
    });
});


// DELETE Controller ******************************
app.delete('/students/:_id', (req, res) => {
    students.deleteStudentById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send({ Success: 'Delete was successful Unique and specific error message.' });
            } else {
                res.status(404).json({ Error: 'Unique and specific error message.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Unique and specific error message.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});