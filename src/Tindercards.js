import React ,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
import axios from 'axios'

export default function Tindercards() {

   const instance=axios.create({
       baseURL:'http://localhost:3000'
   })

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)

      }
    
      const outOfFrame = (name) => {
          console.log(name);
      }
    
  const onCardLeftScreen=(str)=>{
      console.log(str);
  }  
    const [people, setpeople] = useState([]);

    useEffect(() => {
      async function fetchdata(){
          const req=await instance.get("/tinder/cards");
          setpeople(req.data);
      }
      fetchdata();
      console.log(people);
    }, []);
    return (
        
        <div className='tindercontainer'>
    {people.map((people)=><TinderCard  className='swipe' key={people.name} preventSwipe={["up","down"]} onSwipe={(dir) => swiped(dir, people.name)} onCardLeftScreen={() => outOfFrame(people.name)}>
                             <div style={{ backgroundImage: 'url(' + people.url + ')' ,
                                           }} className='card'>
                                  <h1>{people.name}</h1>
                            </div>
                         </TinderCard>)}
                
        </div>
        
        
    )
}

