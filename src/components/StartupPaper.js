import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

const styles = {
  paper: {
    height: '350px',
    width: '250px',
    padding: '30px 20px',
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }
};
const baseUrl = 'http://185.117.22.106:8000'
const CategoryPaper = ({product, WrapperClassName}) => {
  return (
    <Link to={`/start-ups/${product.slug}`}>
      <Paper style={styles.paper} className={`category-paper ${WrapperClassName}`}>
          <div className="category-image">
            <img style={styles.img} src={baseUrl + product.details.logo} alt="logo"/>
          </div>
          <span><h3>{product.name_en}</h3></span>
          <div className="category-info-box">
            <div>{`${product.details.city}, ${product.details.country}`}</div>
            <div>{`Founded in ${product.details.year}`}</div>
            <div>{`N.P.S: ${product.n_p_score}`}</div>
          </div>
          <div id='paper-short-desc'>
            {product.details.summary.split(' ').splice(0, 10).join(' ')}
          </div>
      </Paper>
    </Link>
  );
}

CategoryPaper.propTypes = {
};

export default CategoryPaper;
