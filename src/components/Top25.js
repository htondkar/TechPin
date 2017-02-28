import React, {PropTypes} from 'react';

import Modal from 'react-modal';
import AddForm from './AddForm';
import SortingMenu from './SortingMenu';

import sort from '../helpers/helpers';
import StartUpWidget from './StartUpWidget';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.4)',
  },

};


function generateListItem (startUp, i) {
  return <StartUpWidget startUp={startUp} key={startUp.name} i={i}/>
};

function filterStartUpList(list, sortBy) {
  return {
    ratedByPeople: sort(list.filter(item => item.ratedBy === 'people'), sortBy.people),
    ratedByEditors: sort(list.filter(item => item.ratedBy === 'editors'), sortBy.editors),
    newStartUps: sort(list.filter(item => item.ratedBy === 'new'), sortBy._new)
  };
};

export default class Top25 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen : false,
        sortBy: {
          editors: 'name',
          people: 'name',
          _new: 'name',
        }
      }
    }

    handleModalOpen = () => {
      this.setState({modalIsOpen: true});
    }

    closeModal = () => {
     this.setState({modalIsOpen: false});
   }

   componentWillMount = () => {
     if (this.props.list) {
       const list = this.props.list;
       this.setState({list});
     }
   }

   componentWillReceiveProps = (nextProps) => {
     if (nextProps.list) {
       this.setState({list: nextProps.list});
     }
   }

   handleChangeSorting = (event, value) => {
     const values = value.split('-');
     const updatePrevSort = this.state.sortBy;
     updatePrevSort[values[1]] = values[0]
     this.setState({sortBy: updatePrevSort});
    };

    render() {
      const filteredListByRater = filterStartUpList(this.state.list, this.state.sortBy);
      return (
        <div className='top25 main-content'>
          <header className="top25-header">
            <span>Top 25 start-ups</span>
            <p className="sub-header">Chosen By:</p>
          </header>
          <main className="flex-container">
            <div className="column">
              <list>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>Editors</div>
                  {<SortingMenu column='editors' onChange={this.handleChangeSorting}/>}
                </div>
                {filteredListByRater.ratedByEditors.map(generateListItem)}
              </list>
            </div>
            <div className="column">
              <list>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>People</div>
                  {<SortingMenu column='people' onChange={this.handleChangeSorting}/>}
                </div>
                {filteredListByRater.ratedByPeople.map(generateListItem)}
              </list>
            </div>
            <div className="column" >
              <list>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>New</div>
                  {<SortingMenu column='_new' onChange={this.handleChangeSorting}/>}
                </div>
                {filteredListByRater.newStartUps.map(generateListItem)}
              </list>
            </div>
          </main>
          <FloatingActionButton className='floating-action-button' onClick={this.handleModalOpen}>
            <ContentAdd />
          </FloatingActionButton>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyle}
            className='add-modal'
            overlayClassName="add-overlay"
            contentLabel="Modal">
              <AddForm />
          </Modal>
        </div>
      );
    }
  }
