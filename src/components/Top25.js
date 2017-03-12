import React, {PropTypes} from 'react';

import Modal from 'react-modal';
import AddForm from './AddForm';
import SortingMenu from './SortingMenu';

import sort from '../helpers/helpers';
import StartUpWidget from './StartUpWidget';
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


function generateListItem (product, i) {
  return <StartUpWidget product={product} key={product.name_en} i={i}/>
};

export default class Top25 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen : false,
        topProducts: {
          topNew: [],
          topRanked: [],
          randomProducts: []
        },
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
     if (Object.keys(this.props.topProducts).length > 0) {
       const topProducts = this.props.topProducts;
       this.setState({topProducts});
     }
   }

   componentWillReceiveProps = (nextProps) => {
     if (Object.keys(nextProps.topProducts).length > 0) {
       this.setState({topProducts: nextProps.topProducts});
     }
   }

   handleChangeSorting = (event, value) => {
     const values = value.split('-');
     const updatePrevSort = this.state.sortBy;
     updatePrevSort[values[1]] = values[0]
     this.setState({sortBy: updatePrevSort});
    };

    render() {
      return (
        <div className='top25 main-content'>
          <header className="top25-header">
            <span>Top 25 Startups</span>
            <p className="sub-header">Chosen By:</p>
          </header>
          <main className="flex-container">
            <div className="column">
              <list className='widget-list'>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>Editors</div>
                  {<SortingMenu column='editors' onChange={this.handleChangeSorting}/>}
                </div>
                {sort(this.state.topProducts.randomProducts, this.state.sortBy.editors)
                  .map(generateListItem)}
              </list>
            </div>
            <div className="column">
              <list className='widget-list'>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>People</div>
                  {<SortingMenu column='people' onChange={this.handleChangeSorting}/>}
                </div>
                {sort(this.state.topProducts.topRanked, this.state.sortBy.people)
                  .map(generateListItem)}
              </list>
            </div>
            <div className="column" >
              <list className='widget-list'>
                <div className='chooser-title'>
                  <div className='before-top25-title'></div>
                  <div>New</div>
                  {<SortingMenu column='_new' onChange={this.handleChangeSorting}/>}
                </div>
                {sort(this.state.topProducts.topNew, this.state.sortBy._new)
                  .map(generateListItem)}
              </list>
            </div>
          </main>
          <FloatingActionButton secondary={true} className='floating-action-button' onClick={this.handleModalOpen}>
            <ContentAdd />
          </FloatingActionButton>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyle}
            className='add-modal'
            overlayClassName="add-overlay"
            contentLabel="Modal">
              <AddForm closeModal={this.closeModal} />
          </Modal>
        </div>
      );
    }
  }
