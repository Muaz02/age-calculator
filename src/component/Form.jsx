import React from "react";
import { Form } from "react-router-dom";

export default function AgeForm(props){
    return(
        <div className="age--form--container">
            <Form id="age--form" method="post" action="/">
                <label htmlFor='input--day' className="form--label">
                    <h3>DAY</h3>
                    <input
                        name="day" 
                        type='number'
                        className="form--input"
                        id="input--day"
                        placeholder="DD"
                        required
                    ></input>                        
                </label>                
                <label htmlFor='input--month' className="form--label">
                    <h3>MONTH</h3>
                    <input
                        name="month" 
                        type='number'
                        className="form--input"
                        id="input--month"
                        placeholder="MM"
                        required
                    ></input>
                </label>
                <label htmlFor='input--year' className="form--label">
                    <h3>YEAR</h3>
                    <input
                        name="year" 
                        type='number'
                        className="form--input"
                        id="input--year"
                        placeholder="YYYY"
                        required
                    ></input>
                </label> 
            </Form>
            {( props.isValid === null )&& <h3 className="form--not--valid">please enter a valid date</h3>}
            <button className="form--submit--btn" type="submit" form="age--form">
                <img src="icon-arrow.svg" className="icon--arrow"/>
            </button>    
        </div>
    )
}