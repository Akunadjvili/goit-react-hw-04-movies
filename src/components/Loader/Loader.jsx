import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Loader.module.scss';
const loaderRoot = document.querySelector('#front-root');

function Loader() {
  return createPortal(
    <div className={styles.Spinner}>
      <div className={styles.Spinner__overlay}>
        <div className={styles.loading}>
          <div className={styles.arc}></div>
          <div className={styles.arc}></div>
          <div className={styles.arc}></div>
        </div>
      </div>
    </div>,
    loaderRoot,
  );
}

export default Loader;
