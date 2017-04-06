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
      rate: 0,
      userRated: false
    }
  }
  handleRate = (event) => {
    this.setState({rate: event.target.id, userRate: true});

  }
  render() {
    let ur = {
      rated: this.state.rate !== 0,
      rate: this.state.rate
    }
    return (
      <div className="single-page-rate">
        <span>
          <ToggleStar style={styles.svgStar} />
          <span>rate {this.props.name}</span>
        </span>
        <div className="rate-box-container" onClick={this.handleRate}>
          <div id='1' className="rate-box">1</div>
          <div id='2' className="rate-box">2</div>
          <div id='3' className="rate-box">3</div>
          <div id='4' className="rate-box">4</div>
          <div id='5' className="rate-box">5</div>
          <div id='6' className="rate-box">6</div>
          <div id='7' className="rate-box">7</div>
          <div id='8' className="rate-box">8</div>
          <div id='9' className="rate-box">9</div>
          <div id='10' className="rate-box">10</div>
        </div>
      </div>
    )
  }
}
