import React from 'react';


class QuoteCreator extends React.Component {
    constructor(props) {
        super(props);
      }
    render() { 
      return (
        <div>
            <div id="text">
            <p>"{this.props.quote}"</p>
        </div>
        {/*Author*/}
        <div id="author">
            <p>- {this.props.author}</p>
        </div>
      </div>
      )
    }
  }

export default QuoteCreator