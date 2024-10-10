// AvatarWithStatus.js

import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  return (
    <>
      {indashBoard ? (<div className={styles.avatarContainer}>
        <img
          src={require('../../../assets/Screenshot 2024-09-07 at 7.18.39 PM.png')} // You can use require if you're using Webpack or similar bundlers
          alt="Avatar"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div>) : (<div></div>)}


      {
      }

      {}
    </>
  );
};

export default AvatarWithStatus;
