import React from 'react'
import { useState, useEffect } from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const loadData = async ()=>{
      const result = await axios.get(`https://randomuser.me/api/?page=1&results=10&seed=abc`);
      setData(result.data.results);
    }
    loadData();
  },[]);
  return (
    <div>
      {data.map((value,index)=>{
        return (
          <Item value={value} key={index}/>
          // <div key={index}>{value.gender}</div>
        )
      })}

    </div>
  )
}

export default Home