import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }) {
  const user = await currentUser()
  if (!user || !user.publicMetadata.siteOwner) {
    redirect('/')
  }

  return (

    <div>{children}</div>
  )
}