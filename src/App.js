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


const App = (props) => {


  return (
    <BrowserRouter>
        <div className="app-wrapper">
          
          <Header />
          <Navbar sidebarPage={props.state.sidebarPage} />

          <div className="app-wrapper-content">
            {/* <Dialogs /> */}
              <Route path='/profile' render={ () =>
                    <Profile profilePage={props.state.profilePage} AddPost={props.AddPost} UpdateNewPost={props.UpdateNewPost}/>} />
              <Route exact path='/'render={ () =>
                    <Profile profilePage={props.state.profilePage}  AddPost={props.AddPost} UpdateNewPost={props.UpdateNewPost}/>} />

              <Route path='/dialogs' render={ () =>
                    <Dialogs dialogsPage={props.state.dialogsPage} AddMessage={props.AddMessage} UpdateNewMessage={props.UpdateNewMessage} />} />
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
