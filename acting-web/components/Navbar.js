import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav >
            <div className={styles.container}>
            <Link href="/" className={styles.alondra} >
                {/* links take any child components */}
                Alondra Delgado
            </Link>
           

            <Link href="#video" className={styles.item}>
                Acting Reel
                
            </Link>

            <Link href="#images" className={styles.item}>
                
                Headshots & Images
            </Link>

            <Link href="#credits" className={styles.item}>
                
                Credits
            </Link>

            <Link href="#about" className={styles.item}>
                
                About
            </Link>

            <Link href="#contact" className={styles.item}>
                Contact
            </Link>

            
                
            

            {/* outside sources use regular a tags */}
            {/* <a 
                href="https://github.com/weston-bailey"
                target="_blank"
            >
                see my github
            </a> */}
            </div>
        </nav>
    )
}