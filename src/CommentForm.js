import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      email: '',
      comment: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, email, comment } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Enter your name here'
          onChange={this.handleChange}
        />
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Enter your email here..'
          onChange={this.handleChange}
        />

        <label>Comment</label>

        <div class='field'>
          <textarea
            rows='4'
            name='comment'
            value={comment}
            placeholder='Type your comment here..'
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button type='submit'>Submit My Comment</button>
      </form>
    );
  }
}

export default CommentForm;
