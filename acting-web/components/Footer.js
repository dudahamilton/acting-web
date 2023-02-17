import React from 'react'
import styles from '@/styles/Footer.module.css'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';



export default function footer(){
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
            <h2 id='contact'>Contact</h2>
            <h5>DDO Artists Agency <br /> </h5>
               <p> Reprensentatives: <br />
                Anthony Boyer <br />
                Candance Stewart <br />
                📞 +1 323 462 8000 <br />
                ✉️ reception@ddoagency.com
                </p>
            </div>
            <div className={styles.socials}>
                <h2>Social</h2>
                <div>
                <SocialIcon url="https://www.instagram.com/ialondradelgado/?hl=en" />
                <SocialIcon url="https://www.tiktok.com/@ialondradelgado" />
                <SocialIcon url="https://twitter.com/alondraamariee1?lang=en" />
                <SocialIcon url="https://www.facebook.com/loly5719" />
                </div>
                
                <div>
                    <p>© Made by Maria Hamilton with ❤️</p>
                    <SocialIcon url="https://www.linkedin.com/in/mariahamiltondev/" />
                </div>    
            </div>

            <div className={styles.imdb}>
                <h2>Acting Profiles</h2>
                <a className={styles.item} target='_blank' href='https://pro.imdb.com/name/nm4549589/?ref_=recent_view_1'>
                <Image
                    src='/pictures/imdb.png'
                    alt='imdb logo'
                    width='90'
                    height='50'/>
                </a>
            </div>        
        </div>
         


        
    )
}