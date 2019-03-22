import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import FeedPhoto from "../FeedPhoto";

const Feed = props => {
  return props.loading ? <LoadingFeed /> : <RenderFeed {...props} />;
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

const RenderFeed = props => {
  return (
    <div className={styles.feed}>
      {props.feed.map(photo => {
        return <FeedPhoto key={photo.id} {...photo} />;
      })}
    </div>
  );
};

Feed.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Feed;
