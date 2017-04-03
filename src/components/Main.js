import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {

  constructor(){
    super();
    injectTapEventPlugin();
  }

  componentDidMount = () => {
    const authed = JSON.parse(sessionStorage.getItem('techpin'));
    try {
      if (authed['api-token']) {
        this.props.actions.wasAuthed(authed);
      }
    } catch (e) {
      // no-op
    }

  }



  render() {
    return (
      <main id="container">
          <div className="app-wrapper">
            <nav className="header" id='header'>
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
    allProducts: state.allProducts,
    singleProducts: state.singleProducts,
    topProducts: state.topProducts,
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
