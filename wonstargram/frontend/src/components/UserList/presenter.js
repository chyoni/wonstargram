import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import MdCloseIcon from "react-ionicons/lib/MdClose";
import UserListRow from "../UserListRow";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.overlay} />
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span className={styles.closeIcon} onClick={props.closeLikes}>
          <MdCloseIcon icon={"md-close"} fontSize={"28px"} color={"black"} />
        </span>
      </header>
      <div className={styles.content}>
        {props.loading ? (
          <Loading />
        ) : (
          <UserListRow userList={props.userList} />
        )}
      </div>
    </div>
  </div>
);

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
