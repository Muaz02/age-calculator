import React from "react";
import { useActionData } from "react-router-dom";
import AgeForm from "./component/Form";
import isValidDate from "./util";

export async function action({ request }){
    const formData = await request.formData()
    const error = {
        dayErr:null,
        monthErr:null,
        yearErr:null
    }
    const data = {
        day: parseInt(formData.get('day')),
        month: parseInt(formData.get('month')),
        year: parseInt(formData.get('year')),
    }   

    const isValid = isValidDate(data.day,data.month,data.year)
    
    if(isValid){
        return data
    }

    else {
        return null
    }
}

export default function Main(){
    const data = useActionData()

    function getAge(dd,mm,yy){
        const currentdate = new Date()
        const birthDate = new Date(`${mm}/${dd}/${yy}`)

        const diffTime = Math.abs(currentdate - birthDate);
        const dayInSec = (1000 * 60 * 60 * 24);  
        const totalDays = Math.floor(diffTime/dayInSec);
        
        const years = Math.floor((totalDays)/365.25);
        const months = Math.floor((totalDays%365.25)/30) 
        const days = Math.floor((totalDays%365.25)%30)   

          
        return {
            days: days,
            months: months,
            years: years
        }
    }

    const age = data? getAge(data.day,data.month,data.year): null

    return (
        <main>
            <AgeForm isValid={data} />
            <div className="age--container">
                <h2 className="age--info"><span>{age? age.years:'--'}</span>years</h2>
                <h2 className="age--info"><span>{age? age.months:'--'}</span>months</h2>
                <h2 className="age--info"><span>{age? age.days:'--'}</span>days</h2>
            </div>
            
        </main>
    )
}