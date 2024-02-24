"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import style from './../lens.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Tab } from '@headlessui/react'


export default function LensPage() {
  const [LensData, setLensData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('List');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/lensapi`);
      setLensData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className='container max-w-[1200px] md:pt-16'>

    </div >
  )
}