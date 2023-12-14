import React from 'react'
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const signInLink = {
    color: '#0077FF',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
  }

  const navigate = useNavigate();
  function startRegister() {
    navigate('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to ChatterHouse!" icon="logo">
      <div className={styles.card}>
        <p className={styles.text}>
          This is a peer-to-peer voice chat website where there are multiple
          rooms, and in each room, there are two catogory, Speakers and listener.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLink} to='/login'>Sign in</Link>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default Home