import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav >
            <div className={styles.container}>
            <Link href="/" className={styles.item} >
                {/* links take any child components */}
                Alondra Delgado
            </Link>
           

            <Link href="/" className={styles.item}>
                Contact
                
            </Link>

            <Link href="/" className={styles.item}>
                {/* links take any child components */}
                About
            </Link>

            <Link href="/" className={styles.item}>
                {/* links take any child components */}
                Showreel
            </Link>

            <Link href="/" className={styles.item}>
                {/* links take any child components */}
                Headshots and Images
            </Link>

            <Link href="/" className={styles.item}>
                {/* links take any child components */}
                CV
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