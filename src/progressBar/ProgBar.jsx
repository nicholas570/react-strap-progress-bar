import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class ProgBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
    this.handleProgress = this.handleProgress.bind(this);
  }

  handleProgress() {
    this.setState((prevState) => ({
      progress: prevState.progress + 2.5, // toute les secondes
    }));
  }

  componentWillMount() {
    setInterval(() => this.handleProgress(), 500);
  }

  render() {
    return (
      <ProgressBar
        variant='warning'
        now={this.state.progress}
        style={{ width: "50vw" }}
      />
    );
  }
}
export default ProgBar;
