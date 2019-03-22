import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import HeartOutIcon from "react-ionicons/lib/IosHeartOutline";
import HeartIcon from "react-ionicons/lib/IosHeart";
import TextIcon from "react-ionicons/lib/IosTextOutline";

const PhotoActions = (props, context) => (
  <div className={styles.photoActions}>
    <div className={styles.iconColumn}>
      <span className={styles.icon} onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <HeartIcon icon={"ios-heart"} fontSize={"28px"} color={"#EB4B59"} />
        ) : (
          <HeartOutIcon
            icon={"ios-heart-outline"}
            fontSize={"28px"}
            color={"black"}
          />
        )}
      </span>
      <span className={styles.icon}>
        <TextIcon icon={"ios-text-outline"} fontSize={"28px"} color={"black"} />
      </span>
    </div>
    <div className={styles.likeCountColumn}>
      <span className={styles.likeCount} onClick={props.openLikes}>
        {props.number}{" "}
        {props.number === 1 ? context.t("like") : context.t("likes")}
      </span>
    </div>
  </div>
);

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};
export default PhotoActions;
