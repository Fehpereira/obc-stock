import styles from './DashboardShowData.module.css';

const DashboardShowData = ({ reference, total }) => {
  return (
    <div className={styles.container}>
      <h3>{reference}</h3>
      <strong>{total}</strong>
    </div>
  );
};

export default DashboardShowData;
