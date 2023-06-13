import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function LabPages({ children }) {
  const user = await currentUser()
  if (!user || !user.publicMetadata.siteOwner) {
    redirect('/sign-in')
  }

  return <>{children}</>
}