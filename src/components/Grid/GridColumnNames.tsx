import React, {memo} from 'react';
import styles from './GridColumnNames.module.css';

const GridColumnNames = () => {
  return (
    <div className={styles.grid__columnNames}>
          <span className={styles.title_text}>ID</span>
          <span className={styles.title_text}>MODEL</span>
          <span className={styles.title_text}>FUEL CAPACITY</span>
          <span className={styles.title_text}>AIR CONDITION</span>
          <span className={styles.title_text}>IS CAR AVAILABLE</span>
          <span className={styles.title_text}>ACTIONS</span>
    </div>
  )
}

export default memo(GridColumnNames);