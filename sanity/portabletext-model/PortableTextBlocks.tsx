import { type PortableTextComponentProps } from '@portabletext/react'
import React from 'react'

export function PortableTextBlocksNormal({
  value,
  children,
}: PortableTextComponentProps<any>) {
  const isEmpty = !Boolean(
    value.children
      .map((child: any) => ('text' in child ? child.text : ''))
      .join('')
  )

  return (
    <p
      data-blockid={isEmpty ? undefined : value._key}
      className="group relative pr-3 md:pr-0"
    >
      {children}
    </p>
  )
}

export function PortableTextBlocksH1({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <h1
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      {children}
    </h1>
  )
}

export function PortableTextBlocksH2({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <h2
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-100 md:pr-0"
    >
      <a href={`#${value._key as string}`} className="absolute inset-0" />
      {children}
    </h2>
  )
}

export function PortableTextBlocksH3({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <h3
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      <a href={`#${value._key as string}`} className="absolute inset-0" />
      {children}
    </h3>
  )
}

export function PortableTextBlocksH4({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <h4
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      <a href={`#${value._key as string}`} className="absolute inset-0" />
      {children}
    </h4>
  )
}

export function PortableTextBlocksBlockquote({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <blockquote
      data-blockid={value._key}
      className="group relative pr-3 md:pr-0"
    >
      {children}
    </blockquote>
  )
}

export function PortableTextBlocksListItem({
  value,
  children,
}: PortableTextComponentProps<any>) {
  return (
    <li data-blockid={value._key} className="group relative pr-3 md:pr-0">
      {children}
    </li>
  )
}