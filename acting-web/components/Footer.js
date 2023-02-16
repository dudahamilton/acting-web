import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { SocialIcon } from 'react-social-icons';



export default function footer(){
    return (
        <div>
            <h3>Contact</h3>
            <h5>DDO Artists Agency <br /> </h5>
               <p> Reprensentatives: <br />
                Anthony Boyer <br />
                Candance Stewart <br />
                +1 323 462 8000 <br />
                reception@ddoagency.com
                </p>
            <div>
                <SocialIcon url="https://www.instagram.com/ialondradelgado/?hl=en" />
                <SocialIcon url="https://www.tiktok.com/@ialondradelgado" />
                <SocialIcon url="https://twitter.com/alondraamariee1?lang=en" />
                <SocialIcon url="https://www.facebook.com/loly5719" />

            <p>© Made by Maria Hamilton with ❤️</p>
            <SocialIcon url="https://www.linkedin.com/in/mariahamiltondev/" />

            </div>
                
        </div>
        
    )
}