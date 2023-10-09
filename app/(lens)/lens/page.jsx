"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import style from './../lens.module.css'
import ListViewItem from './list'

export default function LensPage() {
  const [LensData, setLensData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lensapi`);
      setLensData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className='container max-w-[1200px] md:pt-16'>
      <div className='py-12'>
      </div>
      <div className='mh-0 my-auto gap-2'>
        <ListViewItem data={LensData} />
      </div>
    </div>
  )
}