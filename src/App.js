import React, { Component } from 'react';
import {sendMessage} from './chat';
import {connect} from 'react-redux';



class App extends Component {
  render() {
    const {feed} = this.props;
    console.log(feed)
    return (
      <div>
        <h1>Hello Bot</h1>
         <ul>
          {feed.map(entry => <li>{entry.text}</li> )}
         </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
})

export default connect(mapStateToProps, {sendMessage})(App);
