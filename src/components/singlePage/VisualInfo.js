import React, {PropTypes} from 'react';
import StarRating from '../sharedComponents/StarRating'

import SocialPeople from 'material-ui/svg-icons/social/people';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const styles = {
    svgIcon: {
        width: '20px', 
        color:'#0D47A1'
    },
}
const VisualInfo = ({product}) => {
  return (
    <div className='visual-info'>
        <div className='single-page-visual-parent' >
            <div className='single-page-visual-widget'>
            {`${product.average_p_rate.toFixed(1)}`}
            <StarRating rating={product.average_p_rate} className='visual-info-star' editable={false}/>
            </div>
            <div>
                <div className='visual-info-sub-span'>
                    <span>{product.rate_count}</span> 
                    <SocialPeople style={styles.svgIcon}/>
                </div>
            </div>
        </div>
        <div className='single-page-visual-parent' >
            <div className='single-page-visual-widget'>
                {product.n_p_score}
            </div>
            <div>
                <div className='visual-info-sub-span'>
                    <span>NPS</span>
                    <ActionGrade style={styles.svgIcon}/>
                </div>
            </div>
        </div>
        <div className='single-page-visual-parent' >
            <div className='single-page-visual-widget'>
                {product.details.employees || '?'}
            </div>
            <div>
                <div className='visual-info-sub-span'>
                    <span>Empl.</span>
                    <ActionWork style={styles.svgIcon}/>
                </div>
            </div>
        </div>
        <div className='single-page-visual-parent' >
            <div className='single-page-visual-widget'>
                {product.details.year || '?'}
            </div>
            <div>
                <div className='visual-info-sub-span'>
                    <span>Launch</span>
                    <ActionFlightTakeoff style={styles.svgIcon}/>   
                </div>
            </div>
        </div>
    </div>
    );
}

VisualInfo.propTypes = {
};

export default VisualInfo