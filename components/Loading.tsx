// components/Loading.tsx
import { useEffect, useState } from 'react';
import styles from './Loading.module.css'; // Create this CSS module for styling

const Loading = () => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev); // Toggle the blink state
    }, 500); // Adjust the blinking speed as needed
  
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <img
        src="/logo.png" // Path to your logo image
        alt="Loading Logo"
        className={`${styles.logo} ${blink ? styles.blink : ''}`}
      />
    </div>
  );
};

export default Loading;