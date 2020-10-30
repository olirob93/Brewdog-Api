import React from "react";
import styles from "./GoogleBtn.module.scss";

const googleBtn = () => {
  return (
    <>
      <div className={styles.googleBtn}>
        <div className={styles.googleIconWraper}>
          <img className={styles.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
          <p className={styles.btnText}><b>Sign in with Google</b></p>
      </div>
    </>
  );
};

export default googleBtn;
