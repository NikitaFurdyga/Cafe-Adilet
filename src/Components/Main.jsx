import React, { useEffect, useState } from 'react';
import firebase, { firestore } from '../firebase-config.js';
import './Main.css';

function Main() {
    const ref = firebase.firestore().collection('items')
    const [data, setdata] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loader, setloader] = useState(true);

    function getData() {
        ref.onSnapshot((QuerySnapshot) => {
            const items = []
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
      <div className="Main">
        {data.map((el) => (
            <div className='item'>
                <img src={el.img}/>
                <p>{el.name}</p>
                <p>{el.discription}</p>
                <p>{el.price}</p>
            </div>
        ))}
      </div>
      
    );
  }
  export default Main;