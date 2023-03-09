import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <h2>Hi, I am a {props.color} Car!</h2>;
}

function Garage() {
    return (
        <>
        <h1>Yo, what's that in my garage?</h1>
        <Car color="red"/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);