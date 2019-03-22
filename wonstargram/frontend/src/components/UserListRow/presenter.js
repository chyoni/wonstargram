import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const UserListRow = props => {
  const { userList } = props;
  return userList.map(user => (
    <UserInfo
      key={user.id}
      profileImage={user.profile_image}
      username={user.username}
    />
  ));
};

UserListRow.propTypes = {
  userList: PropTypes.array.isRequired
};

const UserInfo = (props, context) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img
          src={props.profileImage || require("images/noPhoto.jpg")}
          alt={props.username}
          className={props.big ? styles.bigAvatar : styles.avatar}
        />
        <div className={styles.user}>
          <span className={styles.username}>{props.username}</span>
          <span className={styles.name}>{props.name}</span>
        </div>
      </div>
      <span className={styles.column}>
        <button className={styles.followButton}>{context.t("Follow")}</button>
      </span>
    </div>
  );
};

UserInfo.propTypes = {
  profileImage: PropTypes.string,
  username: PropTypes.string.isRequired,
  big: PropTypes.bool
};

UserInfo.contextTypes = {
  t: PropTypes.func.isRequired
};

UserInfo.defaultProps = {
  big: false
};

export default UserListRow;
