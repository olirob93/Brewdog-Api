import React from "react";
import styles from "./GoogleBtnSignOut.module.scss";

const googleBtnSignOut = () => {
  return (
    <>
      <div className={styles.googleBtn}>
        <div className={styles.googleIconWraper}>
          <img className={styles.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
          <p className={styles.btnText}><b>Sign Out</b></p>
      </div>
    </>
  );
};

export default googleBtnSignOut;
