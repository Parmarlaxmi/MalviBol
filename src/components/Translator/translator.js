import React from 'react';
import './translator.css';

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
    
  ];

  return (
    <div id="learn" className='learn-container'>
      <h2 className='learn-heading'>Translate now</h2>
      <p className='region-info'>Hindi to Malvi</p>
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
    </div>
  );
}

export default Learn;
