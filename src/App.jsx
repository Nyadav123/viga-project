import React from "react";
import Spash from "./components/Pages/Spash";
import Header from "./components/Pages/Header";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Check from "./components/Pages/Check";
import Exam from "./components/Pages/Exam";
import Setting from "./components/Pages/Setting";
import onBoard1 from "./components/Pages/onBoard1";
import onBoard2 from "./components/Pages/onBoard2";
import onBoard3 from "./components/Pages/onBoard3";
import onBoard4 from "./components/Pages/onBoard4";
import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    <Header />

      <Route path="/" component={Spash} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/onBoard1" component={onBoard1} exact />
      <Route path="/onBoard2" component={onBoard2} exact />
      <Route path="/onBoard3" component={onBoard3} exact />
      <Route path="/onBoard4" component={onBoard4} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/settings" component={Setting} exact />
      <Route path="/checking" component={Check} exact />
      <Route path="/exam" component={Exam} exact />
    </BrowserRouter>
    
  );
}

export default App;


