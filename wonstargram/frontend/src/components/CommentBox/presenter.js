import React from "react";
import styles from "./styles.module.scss";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";

const CommentBox = (props, context) => (
  <form className={styles.commentBox}>
    <Textarea
      className={styles.input}
      placeholder={context.t("Add a comment ...")}
      value={props.comment}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyPress}
      name={"comment"}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTyeps = {
  comment: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default CommentBox;
