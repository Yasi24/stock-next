import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ahmad Yasi Faizi Page</title>
    </Head>
    <h1>Ahmad Yasi Faizi Page</h1>
    <p>
      This is a sample page for Ahmad Yasi Faizi.
    </p>
    <Link href="/about}">About</Link>
    </>
  )
}
