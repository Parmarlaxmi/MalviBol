import React from 'react';
import './learn.css';
import rn from "./Malwaregionimg.png"


const Learn = () => {
  const citiesData = [
    {
      city: 'Rajgarh',
      temples: ['Narsingharh Fort', 'Guru-Maharaj temple Kunwar-kotri', 'Bioara Mata Mandir']
    },
    {
      city: 'Mandsaur',
      temples: ['Pashupatinath Temple', 'Nalchha Mata Temple', 'Dashavtar Temple']
    },
    {
      city: 'Dewas',
      temples: ['Chamunda Mata Mandir', 'Kaila Devi Mandir', 'Tekri Ganesh Mandir']
    },
    
    {
      city: 'Neemuch',
      temples: ['Neelkantheshwar Temple', 'Sukhanandji Temple', 'Jawahar Tekri']
    },
    {
      city: 'Ratlam',
      temples: ['Shri Kalika Mata Temple', 'Shri Shantinath Digamber Jain Temple', 'Shri Banke Bihari Temple']
    },
    {
      city: 'Shajapur',
      temples: ['Beejasan Mata Temple', 'Babulnath Mahadev Temple', 'Bhanpura Temple']
    },
    {
      city: 'Agar',
      temples: ['Chandranarayan Temple', 'Jain Bada Mandir', 'Hanuman Temple']
    },
    {
      city: 'Ujjain',
      temples: ['Mahakaleshwar Jyotirlinga', 'Kal Bhairav Temple', 'Harsiddhi Temple']
    },
    {
      city: 'Indore',
      temples: ['Kanch Mandir', 'Bada Ganpati Temple', 'Annapurna Temple']
    },
    {
      city: 'Barwani',
      temples: ['Vijay Garh Fort', 'Bawangaja Jain Temple', 'Gaumukh Temple']
    },
    {
      city: 'Burhanpur',
      temples: ['Asirgarh Fort Temple', 'Shahi Jama Masjid', 'Khuni Bhandara']
    },
    {
      city: 'Dhar',
      temples: ['Bhojshala-Kamal Maula Mosque', 'Bagh Caves', 'Ek Mukhi Datta Temple']
    },
    {
      city: 'Jhabua',
      temples: ['Sitlamata Temple', 'Chhatarbhuj Temple', 'Nageshwar Mahadev Temple']
    },
    {
      city: 'Khandwa',
      temples: ['Omkareshwar Temple', 'Navgrah Mandir', 'Pandrinath Temple']
    },
    {
      city: 'Khargone',
      temples: ['Navgrah Mandir', 'Omkareshwar Temple', 'Nagchandreshwar Temple']
    },
    {
      city: 'Alirajpur',
      temples: ['Patal Bhairav Temple', 'Shri Chitragupt Ji Mandir', 'Shri Bheruji Temple']
    },
    
  ];



  return (
    
    <div id="learn" className='learn-container'>
      <h2 className='learn-heading'>Madhyapradesh's Malva Region</h2>
      <p className='region-info'>Let's Explore</p>
     
      <div className='cities-grid'>
        {citiesData.map((city, index) => (
          <div key={index} className='city-card'>
            <h3 className='city-name'>{city.city}</h3>
            <ul className='temple-list'>
              {city.temples.map((temple, index) => (
                <li key={index}>{temple}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='image-container'>
        <img src={rn} alt="Malva Region" className='learn-image' />
      </div>
      
    </div>
  );
}


export default Learn;
