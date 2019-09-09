import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class App extends Component {
  state = {
    characters: []
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className='container'>
        <h1>Commenting React Application</h1>
        <p>Leave a comment about Harry Potter and the Chamber of Secret.</p>
        <h3>Add a new comment</h3>
        <CommentForm handleSubmit={this.handleSubmit} />
        <CommentList characterData={characters} />
      </div>
    );
  }
}

export default App;
