import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="I">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        {/* SideBar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  )
}
