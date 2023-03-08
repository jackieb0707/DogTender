import React from 'react';
import Dogs102 from '../assets/Dogs102.jpg'
import Dogs103 from '../assets/Dogs103.jpg'

const Home = () => {
  

  return (
    <main>
      <div>
        <p>
        Does your dog ever need a friend to play with ?🐕‍🦺 
       Tired of keeping your dog company? 🐶Well DogTender is here to help 🐶.
      <p>Our website is designed to help you and your furry friend company for any occasion </p> 


        <div className='dog-pictures' >
        <p className='picture-div'>
            Photos of current dog playdates:</p> 
            <img src={Dogs102} alt="dogphoto" className='dog-pictures1'/>
          
          <p className='picture-div'>
            
            <img src={Dogs103} alt="dogphoto" className='dog-pictures2'/>
           
          </p>

        </div>
        </p>

      </div>
      
    </main>
  );
};

export default Home;
