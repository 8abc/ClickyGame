import React, { Component } from "react";
import Card from "./Card";
// import Navbar from "./Navbar";
import Container from "./Container";
// import Footer from "./Footer";
import cards from "./cards.json";

class App extends Component {
  // sets this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Gave Over:( \nscore: ${this.state.score})`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.card.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };
  //  map over this.state.card and render a card component for each card object
  render() {
    return (
      <Container>
        {/* <Navbar score={this.state.score} highscore={this.state.highscore}>
          Clicky Game
        </Navbar> */}
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;
