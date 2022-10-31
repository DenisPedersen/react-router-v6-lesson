import { getWorkshops } from '../api'
import {Link } from 'react-router-dom'

export default function Workshops() {

  const workshops = getWorkshops()

  return (
    <div className="container">
      <h1>Workshop Categories</h1>
   
        {
          workshops.map(workshop => 
            <p>{workshop.name}</p>
                
                
                )
        }
     
    </div>
  );
}
