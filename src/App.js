import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/hoc/content/content';
import Welcome from './components/UI/login/Welcome';
import SideBar from './components/UI/sidebar/Sidebar';

const App = (props) => {

    
  const Output = props.id !== null ?
    (<Welcome />) :
    (
      <Fragment>
        { props.hamburgerState === false ? <SideBar /> : null}
        < Content />
      </Fragment>
    )

  return (
    <div className="App">
      <BrowserRouter>
        {Output}
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    hamburgerState: state.ui.sideBarShow,
    id: state.auth.userId
  }
}
export default connect(mapStateToProps)(App);
