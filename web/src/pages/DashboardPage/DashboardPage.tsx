import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import DashboardCell from 'src/components/DashboardCell'

const DashboardPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      <h1>Dashboard</h1>
      <p>
        {(currentUser?.id as string | null | undefined) ?? 'no current user'}
      </p>
      <DashboardCell />
      <p></p>
    </>
  )
}

export default DashboardPage
