import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "../components/Navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* navbar above */}
      <Navbar />
      <Component {...pageProps} />
    {/* footer below */}
    </>
  )
}