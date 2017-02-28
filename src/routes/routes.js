import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from '../components/Main';
import Top25 from '../components/Top25';
import EditInfo from '../components/EditInfo';
import AboutPage from '../components/AboutPage';
import SinglePage from '../components/SinglePage';
import DetailedInfo from '../components/DetailedInfo';
import CategoryPage from '../components/CategoryPage';
import RequireAuth from '../components/HOCs/RequireAuth';
import ContributePage from '../components/ContributePage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Top25} />
    <Route path="about" component={AboutPage} />
    <Route path="contribute" component={ContributePage} />
    <Route path="categories/:category" component={CategoryPage} />
    <Route path="start-ups/:startUpName" component={SinglePage}>
      <Route path="/edit" component={RequireAuth(EditInfo)} />
    </Route>
  </Route>
);
