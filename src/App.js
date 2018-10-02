import React, { Component } from 'react';
import {sendMessage} from './chat';
import {connect} from 'react-redux';
import 'milligram';



class App extends Component {
  render() {
    const {feed, sendMessage} = this.props;
    console.log(feed)
    return (
      <div>
        <h1>Hello Bot</h1>
         <ul>
          {feed.map(entry => <li>{entry.text}</li> )}
         </ul>
         <input type="text" onKeyDown={ e => e.keyCode===13 ? sendMessage(e.target.value): null} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state
})

export default connect(mapStateToProps, {sendMessage})(App);
