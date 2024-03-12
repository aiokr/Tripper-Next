import { redirect } from 'next/navigation'

export default async function Page({children}) {

  return (
    <div>{children}</div>
  )
}