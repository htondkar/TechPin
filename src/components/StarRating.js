import React, {PropTypes} from 'react';


const Star = (props) => {
		let r = 'fa fa-star';
		if(!props.selected){
			r += '-o';
		}
		return (
			<i {...props} className={r}/>
		);

}

export default class StarRating extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editAble: false,
			rating: 0,
			hoverAt: null
		};
	}
	componentDidMount = () => {
		const rating = this.props.rating;
		const editAble = this.props.editAble || false;
	  this.setState({rating, editAble});
	}
	componentWillReceiveProps = (nextProps) => {
		const rating = nextProps.rating;
		const editAble = nextProps.editAble || false;
	  this.setState({rating, editAble});
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
  handleClick = (idx, evt) => {
		if (this.state.editAble) {
			this.setState({rating: idx + 1});
			console.log('clicked');
		}
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
    return (<span className={this.props.className || 'star-rating'}>{stars}</span>);
  }
}

Star.propTypes = {
};
