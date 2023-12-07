"use client"
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import style from './../lens.module.css'

export default function LensListView({ data }) {
  return (
    data.map((data) => (
      <div key={data.no}>
        {data.coordinate}
      </div>
    ))
  )
}