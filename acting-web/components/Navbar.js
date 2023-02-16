import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class='container-fluid'>
            <Link href="/" class="navbar-brand" >
                {/* links take any child components */}
                Alondra Delgado
            </Link>
           

            <Link href="/" class="nav-link nav-item">
                Contact
                
            </Link>

            <Link href="/" class="nav-link nav-item">
                {/* links take any child components */}
                About
            </Link>

            <Link href="/" class="nav-link">
                {/* links take any child components */}
                Showreel
            </Link>

            <Link href="/" class="nav-link">
                {/* links take any child components */}
                Headshots and Images
            </Link>

            <Link href="/" class="nav-link">
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