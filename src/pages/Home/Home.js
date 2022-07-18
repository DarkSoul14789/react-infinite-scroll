import React from 'react'
import { useState, useEffect, useContext } from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';
import { Audio } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Home.css'
import { UserContext } from '../../App'

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  const [context, setContext] = useContext(UserContext);


  const loadData = async ()=>{
    const result = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);
    setData((oldData)=>[...oldData,...result.data.results]);
  }
  const handleScroll = (e)=>{
    if(e.target.documentElement.scrollTop + window.innerHeight +1 >= e.target.documentElement.scrollHeight && !end && !loading){
      if(page<=4){
        setLoading(true);
        setPage(page+1);
        setLoading(false);
      }
      else{
        setEnd(true);
      }
    }
  }


  useEffect(()=>{
    if(page === 1){
      loadData();
      window.addEventListener('scroll',handleScroll);
    }
    else{
      setTimeout(()=>{
        loadData();
        window.addEventListener('scroll',handleScroll);
      },1000)
    }
  },[page]);

  const handleClick = ()=>{
    setContext(false);
  }
  return (
    <div>
      <div className='logout'>
        <button className='lgbtn' onClick={handleClick}>Logout</button>
      </div>
      {data.map((value,index)=>{
        return (
          <Item value={value} key={index}/>
        )
      })}
      {
        !end && <div className='loader'>
          <Audio
          height="75"
          width="75"
          color='orange'
          ariaLabel='loading'
          />
        </div> 
      }
      {
        end && <h1>End of the list!</h1>
      }
    </div>
  )
}

export default Home