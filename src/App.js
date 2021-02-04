import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./container/Home/Home";
import Add from "./container/Add/Add";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import Header from "./components/Header/Header";
import ReadMore from "./container/ReadMore/ReadMore";
import EditPost from "./container/EditPost/EditPost";
import EditAbout from "./container/EditAbout/EditAbout";
import EditContacts from "./container/EditContacts/EditContacts";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container pt-3">
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/add/" exact component={Add} />
            <Route path="/about" exact component={About}/>
            <Route path="/contacts" exact  component={Contacts} />
            <Route path="/posts/:id" exact component={ReadMore} />
            <Route path="/posts/:id/edit" component={EditPost} />
            <Route path="/about/edit"  component={EditAbout} />
            <Route path="/contacts/edit" component={EditContacts} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
