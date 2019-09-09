import React, { Component } from 'react';

const ListBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.comment}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const ListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Comments</th>
      </tr>
    </thead>
  );
};

class CommentList extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <table>
        <ListBody characterData={characterData} />
        <ListHeader />
      </table>
    );
  }
}

export default CommentList;
