import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import PhotoActions from "../PhotoActions";
import PhotoComments from "../PhotoComments";
import TimeStamp from "../TimeStamp";
import CommentBox from "../CommentBox";
import UserList from "../UserList";

const FeedPhoto = (props, context) => {
  return (
    <div className={styles.feedPhoto}>
      <header className={styles.header}>
        <img
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.username}
          className={styles.profileImage}
        />
        <div className={styles.headerColumn}>
          <span className={styles.creator}>{props.creator.username}</span>
          <span className={styles.location}>{props.location}</span>
        </div>
      </header>
      <img src={props.file} alt={props.caption} className={styles.postImage} />
      <div className={styles.meta}>
        <PhotoActions
          number={props.like_count}
          isLiked={props.is_liked}
          photoId={props.id}
          openLikes={props.openLikes}
        />
        <PhotoComments
          caption={props.caption}
          creator={props.creator.username}
          comments={props.comments}
        />
        <TimeStamp time={props.natural_time} />
        <CommentBox photoId={props.id} />
      </div>
      {props.seeingLikes && (
        <UserList title={context.t("Likes")} closeLikes={props.closeLikes} />
      )}
    </div>
  );
};

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    //shape은 object의 모습
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired,
  seeingLikes: PropTypes.bool.isRequired
};

export default FeedPhoto;
