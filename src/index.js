import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: "Peter",
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random() * 1000) + 1;
}

function greeting(obj){
    const greeting = (
        <div>
            <h1>Salutations {obj.name}</h1>
            <h2 className="text-muted">Your lucky number is {obj.luckyNumber}</h2>
        </div>
    );
    return greeting;
}


