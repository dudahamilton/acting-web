import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                {/* links take any child components */}
                Leah Bright
            </Link>

            <Link href="/">
                Contact
                
            </Link>

            <Link href="/">
                {/* links take any child components */}
                About
            </Link>

            <Link href="/">
                {/* links take any child components */}
                Showreel
            </Link>

            <Link href="/">
                {/* links take any child components */}
                Headshots and Images
            </Link>

            <Link href="/">
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
        </nav>
    )
}