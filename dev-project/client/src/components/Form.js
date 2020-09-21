import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="container">
					<h1 className="title">Register User</h1>
					<form>
						<label>Name: </label>
						<input required type="text" id="userName" name="userName"/>
						<br/>
						<label>Email: </label>
						<input required type="email" id="userEmail" name="userEmail"/>
						<br/>
						<button type="submit">Register</button>
					</form>
            
        </div>
    )
}

export default Form
