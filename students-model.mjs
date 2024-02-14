// Models for the student Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500: Connection to the server failed' });
    } else  {
        console.log('Successfully connected to MongoDB student using Mongoose.');
    }
});

// SCHEMA: Define the student's schema.
const studentSchema = mongoose.Schema({
	name:    { type: String, required: true },
	phone:     { type: Number, required: true },
	email: { type: String, required: true },
    time:     { type: Number, required: true },
    date: { type: String, required: true },
});

// Compile the model from the schema 
// by defining the student name "student".
const students = mongoose.model('Student', studentSchema);


// CREATE model *****************************************
const createStudent = async (name, phone,email,time, date) => {
    const student = new students({ 
        name: name,
        phone: phone,
        email: email, 
        time: time, 
        date: date 
    });
    return student.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveStudents = async () => {
    const query = students.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveStudentByID = async (_id) => {
    const query = students.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteStudentById = async (_id) => {
    const result = await students.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateStudent = async (_id, name, phone,email,time, date) => {
    const result = await students.replaceOne({_id: _id }, {
        name: name,
        phone: phone,
        email: email, 
        time: time, 
        date: date 
    });
    return { 
        _id: _id, 
        name: name,
        phone: phone,
        email: email, 
        time: time, 
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createStudent, retrieveStudents, retrieveStudentByID, updateStudent, deleteStudentById }