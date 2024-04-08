import React, { useState } from 'react'
import './main.css'
import Sumbited from './Sumbited'

function Main() {
    const [submit, setSubmit] = useState(false)
    const submitFunction = () => {
        setSubmit(true)
    }



    return(
        <React.Fragment>
            <div>
            <form action='/info'>
            <p>
                <label for="name">Type your name:</label>
                <input id='name' name='name' placeholder='Name'/>
            </p>
            <p>
                <label  for="password">Type your password:</label>
                <input type='password' name='password' id='password' placeholder='Name'/>
            </p>
            <p>
                <label for="Male">Male</label>
                <input type='radio' name='Male' id='Male' placeholder='Gender'/>
                <label for="Female">Female</label>
                <input type='radio' name='Female' id='Female' placeholder='Gender'/>
            </p>
            <button onClick={() => submitFunction()}>Submit</button>
      </form>
     { submit && <Sumbited/>}
        <form action='https://www.google.com/search'>
            <p>Search something</p>
            <input name='q'/>
        </form>
            </div>
       <table>
        <thead>
            {/* How tod do column with two headers */}
            <tr>
                <th rowSpan={2}>Animal</th>             
                <th colSpan={2}>Weight Mass</th>
                <th rowSpan={2}>Count</th>
            </tr>
            <tr>
                <th>30kg.</th>
                <th >70p.</th>
            </tr>
        </thead>
       </table>
     
        </React.Fragment>
      
    )
}


export default Main
