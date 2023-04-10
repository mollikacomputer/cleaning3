
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeroSection from '../../components/header/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <HeroSection/>
    <Link href={'/services'} >
    <button className="btn btn-success">service</button>
    </Link>
    
    </main>
  )
}
