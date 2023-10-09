import React from 'react';
import './Sitebar.css';

function Sitebar() {
    return (
      <div className="Sitebar">
        <p className='Menu'>Меню</p>
        <a href="http://www.example.com" className='Meat'>Всё</a>
        <a href="http://www.example.com" className='Meat'>Закуски</a>
        <a href="http://www.example.com" className='Meat'>Салаты</a>
        <a href="http://www.example.com" className='Meat'>Первое</a>
        <a href="http://www.example.com" className='Meat'>Горячее</a>
        <a href="http://www.example.com" className='Meat'>Шашлык</a>
        <a href="http://www.example.com" className='Meat'>Спиртное</a>      
      </div>
      
    );
  }
  export default Sitebar;