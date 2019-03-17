import React, { Component } from "react";
import Feed from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getFeed } = this.props;
    if (!this.props.feed.length > 0) {
      getFeed();
    } else {
      this.setState({
        loading: false
      });
    }
  }

  componentWillReceiveProps = nextProps => {
    //Props를 뭐를 받을지를 알고있는거
    if (nextProps.feed) {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { feed } = this.props;
    return <Feed {...this.state} feed={feed} />;
  }
}

export default Container;
