import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import Homepage from '../../features/home/Homepage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '7em' }}>
        <Route path="/" exact component={Homepage} />
        <Route path="/activities" exact component={ActivityDashboard} />
        <Route path="/activities/:id" component={ActivityDetails} />
        <Route
          path={['/createActivity', '/manage/:id']}
          key={location.key}
          component={ActivityForm}
        />
      </Container>
    </>
  );
};

export default observer(App);
