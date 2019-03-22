import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PhotoComments = props => (
  <div className={styles.PhotoComments}>
    <ul>
      <div className={styles.creatorField}>
        <Comment username={props.creator} comment={props.caption} />
      </div>
      <div className={styles.commentField}>
        {props.comments.map(comment => (
          <Comment
            key={comment.id}
            username={comment.creator.username}
            comment={comment.message}
          />
        ))}
      </div>
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.oneToOneComment}>
    <span className={styles.creator}>{props.username}</span>{" "}
    <span className={styles.comments}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PhotoComments;
