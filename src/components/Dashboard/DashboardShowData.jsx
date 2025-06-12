import { useState, useEffect } from 'react';
import styles from './DashboardShowData.module.css';

const DashboardShowData = ({ reference, total, timing }) => {
  const [totalToAnimate, setTotalToAnimate] = useState(0);

  useEffect(() => {
    if (total === 0) return;

    let i = 1;
    if (total > 100) {
      i = Math.floor(total / 100);
    }

    let current = 0;
    const interval = setInterval(() => {
      current += i;
      setTotalToAnimate(current);

      if (current >= total) {
        clearInterval(interval);
        current = total;
        setTotalToAnimate(current);
      }
    }, timing * Math.random());

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className={styles.container}>
      <h3>{reference}</h3>
      <strong>{totalToAnimate}</strong>
    </div>
  );
};

export default DashboardShowData;
