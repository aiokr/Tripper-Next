"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import style from './../lens.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { Tab } from '@headlessui/react'
import ListViewItem from './list'
import GridViewItem from './grid'
import MapView from './map'

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
      <Tab.Group>
        <div className='py-12'>
          <div className='pt-2 pb-6 md:pb-12 flex flex-col items-center gap-6 md:justify-between'>
            <div className="inline">
              <div className="text-center text-xl lg:text-3xl font-semibold px-6">
                The moments when I pressed the shutter, the moments are forever.
              </div>
            </div>
            <div className="inline">
              <Tab.List className='inline-flex gap-3 p-1 bg-slate-100 rounded-full'>
                <Tab className={`px-4 py-2  rounded-full focus:outline-none ${selectedTab === 'List' ? 'bg-slate-50' : ''}`} onClick={() => setSelectedTab('List')}>
                  List
                </Tab>
                <Tab className={`px-2 py-2 rounded-full focus:outline-none ${selectedTab === 'Grid' ? 'bg-slate-50' : ''}`} onClick={() => setSelectedTab('Grid')}>
                  Grid
                </Tab>
                <Tab className={`px-2 py-2 rounded-full focus:outline-none ${selectedTab === 'Map' ? 'bg-slate-50' : ''}`} onClick={() => setSelectedTab('Map')}>
                  Map
                </Tab>
              </Tab.List>
            </div>
          </div>

        </div>
        <Tab.Panel>
          <div className='mh-0 my-auto gap-2'>
            <ListViewItem data={LensData} />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className='mh-0 my-auto grid grid-cols-3 gap-1 md:gap-6'>
            <GridViewItem data={LensData} />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <MapView data={LensData} />
        </Tab.Panel>
      </Tab.Group>
    </div >
  )
}