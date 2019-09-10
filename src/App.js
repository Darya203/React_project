import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          
          <Header />
          <Navbar sidebarPage={props.state.sidebarPage} />

          <div className="app-wrapper-content">
            {/* <Dialogs /> */}
              <Route path='/profile' render={ () =>   <Profile store={props.store}/>} />
              <Route exact path='/'  render={ () =>   <Profile store={props.store}/>} />
              <Route path='/dialogs' render={ () =>   <DialogsContainer store={props.store} />} />
              <Route path='/newsfeed' render={ () =><Newsfeed/>} />
              <Route path='/music' render={ () =><Music/>} />
              <Route path='/settings' render={ () =><Settings/>} />
              {/* <Route path='/settings' component={Settings} /> */}

           </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
