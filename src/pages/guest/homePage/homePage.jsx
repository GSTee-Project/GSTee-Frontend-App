import React from 'react';
import styles from './homePage.module.css';
import game from '../../../assets/images/game.png';
import leaderboard from '../../../assets/images/leaderboard.png';
import progress from '../../../assets/images/progress.png';
import achievement from '../../../assets/images/achievements.png';
import slideBased from '../../../assets/images/slide-based-lessons.png';
import gamified from '../../../assets/images/gamified-learning.png';
import multipleGame from '../../../assets/images/multiple-game-modes.png';
import rating from '../../../assets/images/rating.png';
import userOne from '../../../assets/images/user-one.png';
import userTwo from '../../../assets/images/user-two.png';
import userThree from '../../../assets/images/user-three.png';
import dropdown from'../../../assets/images/dropdown-icon.png';
import video from '../../../assets/images/video.png';
import FAQ from '../../../components/ui/FAQ/FAQ';
import Footer from '../../../components/ui/guestFooter/guestFooter';

const HomePage = () => {
  return (
    <div>
      <section className={styles.hero_section}>
        <div>
          <h1>Learn. Play. Level Up!</h1>
          <p>Turn studying into an adventure with GSTee's 
            quizzes, challenges and achievements
          </p>
          <button className={styles.cta_btn}>Get Started</button>
        </div>

        <div className={styles.hero_video_container}>
          <img src={video} alt="hero-video" />
        </div>
      </section>

      {/*GSTee Section*/}
      <section className={styles.gstee_section}>
        <div className={styles.gstee_header}>
          <h2>GSTee</h2>
          <p>The Gamified Learning Platform for GST Students</p>
          <p>GSTee is a fully gamified learning platform designed
             to help university students master General Studies (GST) 
             through challenges, competitions, and interactive learning 
             experiences instead of traditional lectures.
          </p>
        </div>

        <div className={styles.gstee_container}>
          <div>
            <img src={game} alt="game-icon" />
            <h3>Gamified Learning</h3>
            <p>Learn through quizzes and interactive modules</p>
          </div>

          <div>
            <img src={achievement} alt="trophy-icon" />
            <h3>Unlock Achievements</h3>
            <p>Collect badges as you hit milestones</p>
          </div>

          <div>
            <img src={progress} alt="hourglass-icon" />
            <h3>Track Progress</h3>
            <p>View your learning stats in one place</p>
          </div>

          <div>
            <img src={leaderboard} alt="leaderboard-icon" />
            <h3>Leaderboard</h3>
            <p>See how you rank against other learners</p>
          </div>

          {/*<div>
            <img src="" alt="" />
            <h3>Topic Challenges</h3>
            <p>Compete in weekly themed challenges</p>
          </div>*/}
        </div>
      </section>

      {/*Perks of Learning Section*/}
      <section className={styles.perks_section}>
        <div className={styles.perks_header}>
          <h2>The Perks of Learning</h2>
          <p>Unlock exclusive rewards,
             power-ups, and achievements as 
             you learn, making every lesson more 
             exciting and worthwhile!
          </p>
        </div>

        <div className={styles.perks_container}>
          <div className={styles.perks_description}>
            <h3>Slide-Based Lessons</h3>
            <p>Learn in bite-sized, interactive 
              slides designed to make every topic 
              simple, visual, and engaging.
            </p>
          </div>

          <div className={styles.perks_image}>
            <img src={slideBased} alt="slide-based-lessons" />
          </div>

          <div className={styles.perks_image}>
            <img src={gamified} alt="gamified-learning" />
          </div>

          <div className={styles.perks_description}>
            <h3>Gamified Learning Flow</h3>
            <p>Follow a fun learning path 
              where studying unlocks games, 
              earning you rewards as you progress
              through each challenge.
            </p>
          </div>

          <div className={styles.perks_description}>
            <h3>Multiple Game Modes</h3>
            <p>Choose from a variety of 
              exciting game modes—from fast-paced 
              trivia to epic boss battles—that make
              learning feel like play.
            </p>
          </div>

          <div className={styles.perks_image}>
            <img src={multipleGame} alt="multiple-game-modules" />
          </div>
        </div>
      </section>

      {/*Testimonial Sections*/}
      <section className={styles.testimonial_section}>
        <h3>Loved by Students</h3>
        <div className={styles.testimonial_container}>
          <div className={styles.testimonial}>
            <img src={rating} alt="rating" />
            <h4>The Best Platform</h4>
            <p>GSTee turned boring GST into a game I love to play!</p>
            <div className={styles.user_container}>
              <img src={userOne} alt="user-one" />
              <div>
                <p>Seye Joseph</p>
                <p>UNILAG</p>
              </div>      
            </div>
          </div>

          <div className={styles.testimonial}>
            <img src={rating} alt="rating" />
            <h4>The Best Platform</h4>
            <p>GSTee turned boring GST into a game I love to play!</p>
            <div className={styles.user_container}>
              <img src={userTwo} alt="user-two" />
              <div>
                <p>Tunde Ahmed</p>
                <p>UNILAG</p>
              </div>
            </div>
          </div>

          <div className={styles.testimonial}>
            <img src={rating} alt="rating" />
            <h4>The Best Platform</h4>
            <p>GSTee turned boring GST into a game I love to play!</p>
            <div className={styles.user_container}>
              <img src={userThree} alt="user-three" />
              <div>
                <p>Seyi Ibrah</p>
                <p>UNILAG</p>  
              </div>
            </div>
          </div>
        </div>
        <a href="#">See More</a>
      </section>

      {/*FAQ*/}
      <section>
        <FAQ />
      </section>

      {/*CTA*/}
      <section className={styles.cta_section}>
        <h2>Ready to Turn Your Studies into a Game?</h2>
        <button className={styles.cta_btn}>Get Started for Free</button>
      </section>

      {/*Newsletter*/}
      <section className={styles.newsletter_section}>
        <div className={styles.newsletter_header}>
          <p>Our Newsletter</p>
          <p>Get the latest on new features, GST tips and
             interactive content delivered to your inbox.
          </p>
        </div>
        <div className={styles.subscription_input}>
          <input type="email" name="email" id="email" placeholder='Enter Your Email Address' />
          <button>Subscribe</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage