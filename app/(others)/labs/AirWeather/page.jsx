"use client"

import Link from 'next/link'
import { useState, useRef } from 'react';

export default function Noise() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const handleClick = () => {
    setInputValue(inputRef.current.value);
    var airText = inputRef.current.value
    let segments = airText.split(" ");
    let titles = ["报文", "机场代号", "UTC", "风向、风速、阵风", "风向变化", "能见度", "跑道视程", "天气", "Title8", "Title9", "Title10", "Title11", "Title12", "Title13", "Title14", "Title15", "Title16", "Title17", "Title18", "Title19", "Title20", "Title21", "Title22", "Title23", "Title24", "Title25"];

let titledSegments = segments.map((segment, index) => {
  return { title: titles[index], value: segment };
});
    console.log(titledSegments);
  }

  return (
    <main className='pt-12 md:pt-[72px] min-h-[100vh] flex justify-center items-center flex-col bg-zinc-900'>
      <textarea ref={inputRef} className='w-5/6 m-1 p-2 flex flex-col radius border-2 focus:border-main' id="input_area" />
      <button onClick={handleClick} className='w-5/6 m-2 p-6 flex flex-col radius items-center bg-sub hover:bg-main'>识别</button>
      <div className=''>

      </div>
    </main>
  )
}