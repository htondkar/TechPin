import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import Snackbar from 'material-ui/Snackbar';

const Star = (props) => {
		let r = 'fa fa-star';
		if(!props.selected){
			r += '-o';
		}
		return (
			<i {...props} className={r}/>
		);
}

class StarRating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editAble: false,
			rating: 0,
			raters: 0,
			hoverAt: null,
			snackBarIsOpen: false,
			snackBarText: '',
		};
	}
	componentDidMount = () => {
		let rating = this.props.rating;
		let raters = this.props.raters;
		const editAble = this.props.editAble || false;
	  this.setState({rating, editAble, raters});
	}
	componentWillReceiveProps = (nextProps) => {
		let rating = nextProps.rating;
		let raters = this.props.raters;
		const editAble = nextProps.editAble || false;
	  this.setState({rating, editAble, raters});
	}
  handleMouseOver = (idx, evt) => {
		if (this.state.editAble) {
			this.setState({hoverAt: idx + 1});
		}
  }
  handleMouseOut = (idx, evt) => {
		if (this.state.editAble) {
			this.setState({hoverAt: null});
		}
  }
	handleSnackBarClose = () => {
    this.setState({
      snackBarIsOpen: false,
    });
  };
  handleClick = (idx, evt) => {
		if (this.state.editAble) {
			if (!this.props.authenticated) {
				//check if user is authenticated -> if not -> give feedback -> OK
				this.setState({snackBarIsOpen: true, snackBarText: 'Please login first'})
			} else {
				this.setState({ratingAsyncCall: true, rating: 0});
				//calculate the new rating --> how ?
				const newRating = this.calculateNewRating(idx + 1);
				console.log(newRating);
				this.setState({rating: newRating, ratingAsyncCall: false, raters: this.state.raters + 1});
				//call the submit rate action creator directly -> does not exist right now
				// if successful -> dispatch an action -> update the store via reducer -> new rating, if not show old rating
			}
		}
  }
	calculateNewRating = (newRate) => {
		return Math.floor((this.state.rating * this.state.raters + newRate)/(this.state.raters + 1));
	}
  render() {
		let stars = [];
		for(let i = 0 ; i < 5; i++){
			let rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;
			let selected = (i < rating);
			stars.push(
				<Star key={i} selected={selected}
						onMouseOver={()=>this.handleMouseOver(i)}
						onMouseOut={()=>this.handleMouseOut(i)}
						onClick={()=>this.handleClick(i)}
				/>);
		}
    return (
			<div>
				<span className={this.props.className || 'star-rating'}>{stars}</span>
				<Snackbar
					id='signle-page-snackbar'
					contentStyle={{fontSize: '18px'}}
					open={this.state.snackBarIsOpen}
					message={this.state.snackBarText}
					autoHideDuration={3500}
					onRequestClose={this.handleSnackBarClose}
				/>
			</div>
		);
  }
}

Star.propTypes = {
};

function mapStateToprops(state) {
	return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToprops, actions)(StarRating);
