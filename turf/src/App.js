import './App.css';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import Regsiter from './components/Regsiter';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import ResetPass from './components/ResetPass';
import Admin from './components/Admin';
import Testimonials from './components/Testimonials';
import Dashboard from './components/Dashboard';
import ResumeTemplate from './components/ResumeTemplate';
import ResumeGenerator from './components/ResumeGenerator';
import SiteMap from './components/SiteMap';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Terms from './components/Term';
import Fsmap from './components/Fsmap';
import Pturf from './components/Pturf';
import Green from './components/Green';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path={'/'} exact component={Home}/>
        <Route path={'/resume'} exact component={ResumeTemplate}/>
        <Route path={'/generate'} exact component={ResumeGenerator}/>
        <Route path={'/about'} exact component={About}/>
        <Route path={'/book'} exact component={Book}/>
        <Route path={'/registration'} exact component={Regsiter}/>
        <Route path={'/reservations'} exact component={Reservation}/>
        <Route path={'/testimonials'} exact component={Testimonials}/>
        <Route path={'/admin'} exact component={Admin}/>
        <Route path={'/contact-us'} exact component={Contact}/>
        <Route path={'/reset'} exact component={ResetPass}/>
        <Route path={`/dashboard`} exact component={Dashboard}/>
        <Route path={`/sitemap`} exact component={SiteMap}/>
        <Route path={`/faq`} exact component={Faq}/>
        <Route path={`/terms`} exact component={Terms}/>
        <Route path={`/fsmap`} exact component={Fsmap}/>
        <Route path={`/ptmap`} exact component={Pturf}/>
        <Route path={`/greenmap`} exact component={Green}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
