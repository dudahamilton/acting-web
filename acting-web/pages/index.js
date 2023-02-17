import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Alondra Delgado</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      <Image
        src='/pictures/alondra7.png'
        alt='Alondra Headshot'
        width='1500'
        height='700' />
      <section id='video'>
        <div className={styles.text}>
        <p className={styles.firstText}>Whether playing the powerful corporate attorney, crime boss or the loving wife, Alondra’s artistic style is intelligent, powerful and charismatic. </p>
        </div>

        
          
          <ReactPlayer className={styles.showreel} url='https://www.youtube.com/watch?v=XVh8Q695rCo' />
          <a href='https://www.youtube.com/@ialondradelgado' target="_blank">
          <div className={styles.container}><button className={styles.btn}>View More Videos</button></div>
          </a>
      </section>
      <section id='images'>
        <h2 className={styles.h2}>Headshots & Images </h2>
        <div className={styles.images}>
        <div>
          <Image
          className={styles.image}
          src='/pictures/alondra1.png'
          alt='Alondra Headshot'
          width='225'
          height='300'/>
          <Image
          className={styles.image}
          src='/pictures/alondra2.png'
          alt='Alondra Headshot'
          width='225'
          height='300'/>
          <Image
          className={styles.image}
          src='/pictures/alondra3.png'
          alt='Alondra Headshot'
          width='225'
          height='300'/>
        </div>
        
        <div>
        <Image
        className={styles.image}
        src='/pictures/alondra4.png'
        alt='Alondra Headshot'
        width='225'
        height='300'/>
       <Image
        className={styles.image}
        src='/pictures/alondra5.png'
        alt='Alondra Headshot'
        width='225'
        height='300'/>
       <Image
        className={styles.image}
        src='/pictures/alondra6.png'
        alt='Alondra Headshot'
        width='225'
        height='300'/>
        </div>
        </div>
      </section>

      <section id='credits'>
        <h2 className={styles.h2}>Selected Credits</h2>
        
        <div>
        <h3> Past Film & Video</h3>
        <div className={styles.divs}>
          <table className={styles.table}>
            <tr>
              <th>Title</th>
              <th>Role</th>
              <th> Year</th>
           </tr>

            <tr>
              <td>Safehouse</td>
              <td>Carla</td>
              <td>2023</td>
            </tr>

            <tr>
              <td>You Are not Alone</td>
              <td>Lily</td>
              <td>2015</td>
            </tr>

           <tr>
             <td>Kickball</td>
             <td>Andrea</td>
              <td>2021</td>  
           </tr>

           <tr>
            <td>Losing You</td>
            <td>Wife</td>
            <td>2017</td>
           </tr>

           <tr>
            <td>A will to Love</td>
            <td>Veronica</td>
            <td>2017</td>
           </tr>

          </table>
        </div>
       

        <h3> Past Television</h3>
      <div className={styles.divs}> 
        <table className={styles.table}>
          <tr>
            <th>Title</th>
            <th>Role</th>
            <th> Year</th>
          </tr>

          <tr>
            <td>All American</td>
            <td>Vanessa</td>
            <td>2021</td>
          </tr>

          <tr>
            <td>Mayans M.C</td>
            <td>Woman</td>
            <td>2018</td>
          </tr>

          <tr>
            <td>Vida</td>
            <td>Rosario</td>
            <td>2019</td>  
          </tr>

          <tr>
            <td>Downtown Brows</td>
            <td>Miranda</td>
            <td>2016</td>
          </tr>

          <tr>
            <td>Angels Perdidos</td>
            <td>Elenita</td>
            <td>2006</td>
          </tr>
        </table>
      </div>
        

        </div>

        <a target="_blank" href='https://pro.imdb.com/name/nm4549589/credits'>
          <div className={styles.container}>
            <button className={styles.btn}>More Credits</button>
          </div>
        </a>
      </section>
        
      <section id='about'>
        <div className={styles.text}>
          <p className={styles.firstText}>
          Sheldon is a two-time Emmy winning storyteller who has spent his entire adult life in front of the camera as a television news reporter.
          <p></p>
          As an actor, he sees himself taking on a deeper form of storytelling.
          <p></p>

          Sheldon’s devotion to acting is driven by a desire to do more, show more, and to live the lives and circumstances that confront each of us.
          <p></p>

          In just one year, Sheldon has studied under HB Studio, Andrew Wood Acting Studio, the New York Performing Arts Academy, and The Actor’s Workshop. He’s now a student of Tom Kibbe, who studied directly under Stella Adler, Sanford Meisner and Lee Strasberg.
          <p></p>

          He maintains a hunger to learn, explore and do the work.
          <p></p>
          Within his first six months of formal training, Sheldon booked roles in the movie Thanks to Her and the episodic series No Joke.
          </p>
        </div>

        <Image
        src='/pictures/alondra8.png'
        alt='Alondra Headshot'
        width='1500'
        height='750' />
        <div className={styles.text}>
          <p className={styles.firstText}>I am a storyteller. It’s a role that gives me purpose. That’s why it’s been my lifelong vocation. <p></p>
          I honed my storytelling skills as a television reporter, but now I’ve transitioned into a deeper realm of the art: acting.
            <p></p>
          I enjoy the synergistic sensation of seeing, listening, feeling, speaking and moving — with profound meaning — as part of a storyline.<p></p>

          When I deliver that package of creative art to an audience, then see its impact — it comes alive as power and beauty in the same breath.</p></div>
        </section>
      </main>
    </>
  )
}



// Debug
// centralizar tables
// navbar smooth scrowling ✅

// responsive
