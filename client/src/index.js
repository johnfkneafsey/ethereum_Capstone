import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom';
import About from './components/container/About';
// import NotFound from './components/container/NotFound';
import Apply from './components/container/Apply';
import MemberDapps from './components/container/MemberDapps';
import ActiveProposals from './components/container/ActiveProposals';
import SubmitProposal from './components/container/SubmitProposal';


class Root extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={About} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/memberdapps" component={MemberDapps} ></Route>
            <Route exact path="/activeproposals" component={ActiveProposals} ></Route>
            <Route exact path="/submitproposal" component={SubmitProposal} ></Route>
          </div>
          </BrowserRouter>
      </div>
          )
          }
        }

        document.addEventListener('DOMContentLoaded', () =>
        ReactDOM.render(
        <Provider store={store}>
          <Root/>
        </Provider> , document.getElementById('root')
        )
          );
