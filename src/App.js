import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: '1'
    };
    this.ask = this.ask.bind(this);
  }

  ask() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 5)
      });
  }
  render (){

    const QUOTEARRAY = [
      ['Be yourself; everyone else is already taken.', 'Oscar Wilde'],
      ["If you tell the truth, you don't have to remember anything", "Mark Twain"],
      ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
      ["A room without books is like a body without a soul", "Marcus Tullius Ciecero"],
      ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Barunch"],
      ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr Seuss"]
    ];
    const quote = QUOTEARRAY[this.state.randomIndex][0]
    const author = QUOTEARRAY[this.state.randomIndex][1]
    const tweetlink = 'https://twitter.com/intent/tweet?text="' + QUOTEARRAY[this.state.randomIndex][0]+'" - '+QUOTEARRAY[this.state.randomIndex][1]
  return (
    <section className="App">
      {/*Quote Place*/}
      <div id="quote-area">
        <div id="quote-box">
        {/*Quote*/}
        <div id="top-section">
          <div id="text">
            <p>"{quote}"</p>
          </div>
        {/*Author*/}
          <div id="author">
            <p>- {author}</p>
          </div>
        </div>
          {/*Bottom Options*/}
          <div id="bottom-options">
            <div  id="tweet-quote">
            <a target="_blank" href={tweetlink} rel="noopener noreferrer" data-lang="en" data-text="YOUR TEXT">Tweet</a>
            </div>
            <div  id="new-quote" >
              <button onClick={this.ask}>New Quote</button>
            </div>
          </div>
          {/*Bottom Options*/}
        </div>
      </div>
    </section>
  );
}
}

export default App;
