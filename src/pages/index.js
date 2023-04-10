import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '../../components/Banner/Banner'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     
    <Link href={'/services'} >
    <button className="btn btn-success">service</button>
    </Link>
    
    </main>
  )
}
