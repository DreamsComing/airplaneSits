import React, {useState, useEffect} from 'react';
import "./airplaneSeats.css"

function AirplaneSeats() {
    const [passanger, setPassanger] = useState('')
    const portalText = (e) => {
        setPassanger(e.target.value)
    }
    const airplaneSeats1 = [
        ['Mia', 'Emma', 'Isabella'], 
        ['Noah', 'Ethan', 'Jackson'], 
        ['Aiden', 'Lucas', 'Harper'], 
        ['Olivia', 'Liam', 'Amelia'], 
    ];
    const airplaneSeats2 = [
        ['Sophia', 'Liam', 'Olivia'],
        ['Lucas', 'Free', 'Oliver'],
        ['Free', 'Aiden', 'Harper'],
        ['Free', 'Ava', 'Lucas']
    ];
    

    const airplaneSeatsLine1 = airplaneSeats1.map((seatRow1, index) => (
        <div className='passangers' key={index}>
            {seatRow1.map((name, i) => (
                <div className='wrapperName'>
                    <p key={i}>{name}</p>
                </div>
              
            ))}
               
        </div>
    ));

    const airplaneSeatsLine2 = airplaneSeats2.map((seatRow2, index) => (
        <div className='passangers' key={index}>
            {seatRow2.map((name, i) => (
                <div>
                    <p key={i}>{name}</p>
                </div>
            ))}
        </div>
    ))

    useEffect(() => {
        for (let i = 0; i < airplaneSeats2.length; i++) {
            const emptySeatIndex = airplaneSeats2[i].indexOf('Free');
            if (emptySeatIndex !== -1) {
                airplaneSeats2[i][emptySeatIndex] = passanger;
            }
        }
    }, []);
    
    return (
        <div className='airPlain'>
            <div className='PlaneLines'>
                <div className='line1 b'> {airplaneSeatsLine1} </div>
                <div className='line2 line'> {airplaneSeatsLine2} </div>
                
            </div>
         
            <div className='book'>
                 <input onChange={portalText}/>
                 <button className='btn'>Book</button>
            </div>

           
        </div>
    );
}

export default AirplaneSeats;
