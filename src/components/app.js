import React from "react";
import Table from "./table";


const App = () => {
    const students = [
        {
            name: "First Name",
            course: "This Course",
            grade: 89
        },
        {
            name: "Second Name",
            course: "That Course",
            grade: 90
        },
        {
            name: "Third Name",
            course: "Another One",
            grade: 70
        }
    ];
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
};

export default App;