import React, {PropTypes} from 'react';

import Modal from 'react-modal';
import AddForm from './AddForm';
import WidgetColumn from './WidgetColumn'
import SortingMenu from './SortingMenu';


import StartUpWidget from './StartUpWidget';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// import sort from '../../helpers/helpers';

function generateListItem (product, i) {
  return <StartUpWidget product={product} key={product.name_en} i={i}/>
};
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

    render() {
      return (
        <div className='top25 main-content'>
          <header className="top25-header">
            <span>Top Pins</span>
            <p className="sub-header">Dynamic list of startups & accelerators in Iran</p>
          </header>
          <main className="flex-container">
            <WidgetColumn
              productList={this.state.topProducts.randomProducts}
              title='Rated By Editors'/>
            <WidgetColumn
              productList={this.state.topProducts.topRanked}
              title='Rated By Poeple'/>
            <WidgetColumn
              productList={this.state.topProducts.topNew}
              title='New Pins'/>
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
