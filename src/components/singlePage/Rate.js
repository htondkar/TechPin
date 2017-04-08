import React from 'react';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  svgStar: {
    color: '#0D47A1'
  }
}
export default class Rate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userRate: 0,
      userRated: false,
      snackBarIsOpen: false,
      snackBarText: '',
    }
  }
  handleRate = (event) => {
    if (this.props.authenticated) {
      this.setState({userRate: event.target.id});
      this.props.submitRate(event.target.id, this.props.slug)
      .then((res) => {
        console.log(res.data.new_p_rate);
        if (res.status === 200 && res.data.success) {
          this.setState({
          snackBarIsOpen: true,
          snackBarText: 'Successfuly submited your rate',
          userRated: true
        })

        }
      })
    } else {
      this.setState({
        snackBarIsOpen: true,
        snackBarText: 'Please login',
      })
    }
  }

  handleSnackBarClose = () => {
    this.setState({
      snackBarIsOpen: false,
    })
  }

  render() {
    return (
      <div className="single-page-rate">
        <span>
          <ToggleStar style={styles.svgStar} />
          <span>Rate {this.props.name}</span>
        </span>
        <div className="rate-box-container" onClick={this.handleRate}>
          <div id='1' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 1 ? 'rate-selected' : ''}`}>1</div>
          <div id='2' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 2 ? 'rate-selected' : ''}`}>2</div>
          <div id='3' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 3 ? 'rate-selected' : ''}`}>3</div>
          <div id='4' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 4 ? 'rate-selected' : ''}`}>4</div>
          <div id='5' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 5 ? 'rate-selected' : ''}`}>5</div>
          <div id='6' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 6 ? 'rate-selected' : ''}`}>6</div>
          <div id='7' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 7 ? 'rate-selected' : ''}`}>7</div>
          <div id='8' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 8 ? 'rate-selected' : ''}`}>8</div>
          <div id='9' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 9 ? 'rate-selected' : ''}`}>9</div>
          <div id='10' className={`rate-box ${this.state.userRated ? 'deactive' : 'active'} ${this.state.userRate == 10 ? 'rate-selected' : ''}`}>10</div>
        </div>
        <Snackbar
          open={this.state.snackBarIsOpen}
          message={this.state.snackBarText}
          autoHideDuration={3500}
          onRequestClose={this.handleSnackBarClose}
        />
      </div>
    )
  }
}
