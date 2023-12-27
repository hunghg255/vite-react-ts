import React, { useEffect } from 'react';

import styles from './Hello.module.css';

const a = () => {
  return 'AAAA';
};

const Hello = () => {
  useEffect(() => {
    a();
  }, []);
  return (
    <>
      <h1 className={styles.title}>Hello Hello</h1>
    </>
  );
};

Hello.displayName = 'Hello';

export default Hello;
