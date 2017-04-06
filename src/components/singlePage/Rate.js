import React from 'react';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

const styles = {
  svgStar: {
    color: '#0D47A1'
  }
}
export default class Rate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rate: 0
    }
  }
  render() {
    return (
      <div className="single-page-rate">
        <span>
          <ToggleStar style={styles.svgStar} />
          <span>rate {this.props.name}</span>
        </span>
        <div className="rate-box-container">
          <div className="rate-box">1</div>
          <div className="rate-box">2</div>
          <div className="rate-box">3</div>
          <div className="rate-box">4</div>
          <div className="rate-box">5</div>
          <div className="rate-box">6</div>
          <div className="rate-box">7</div>
          <div className="rate-box">8</div>
          <div className="rate-box">9</div>
          <div className="rate-box">10</div>
        </div>
      </div>
    )
  }
}
