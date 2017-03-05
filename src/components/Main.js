import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import Footer from './Footer';
import $ from 'jquery';


class Main extends React.Component {

  constructor(){
    super();
    injectTapEventPlugin();
  }

  componentDidMount = () => {
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 65) {
          $('.all-entries-toolbar').addClass('fixed');
      } else {
          $('.all-entries-toolbar').removeClass('fixed');
      }
    });
  }

  render() {
    return (
      <main id="container">
          <div className="app-wrapper">
            <nav className="header">
              <Header/>
            </nav>
            <ReactCSSTransitionGroup
              transitionName="main"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={100}>
                {React.cloneElement( this.props.children,  {...this.props, key: location.pathname} )}
            </ReactCSSTransitionGroup>
            <Footer/>
          </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.startUps,
    sortedList: state.sortedList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Main.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
