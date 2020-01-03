import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import Messages from "./components/Navbar/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

const App = (props) => {

    const {state} = props;
    const {profile, messages} = state;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar friends={messages.usersArray}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postData={profile}
                                                                  addPost={props.addPost}
                                                                  updateNewPost={props.updateNewPost}
                    />}/>
                    <Route path='/messages'
                           render={() => <Messages messages={messages}
                                                   createNewMessage={props.createNewMessage}
                                                   leaveMessage={props.leaveMessage}
                           />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
