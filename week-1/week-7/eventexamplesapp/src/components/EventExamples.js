import React, { Component } from "react";

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, rupees: "", euro: "" };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.convertCurrency = this.convertCurrency.bind(this);
  }

  increment() {
    // call multiple methods: update counter and say hello
    this.setState(prev => ({ counter: prev.counter + 1 }));
    this.sayHello();
  }

  decrement() {
    this.setState(prev => ({ counter: prev.counter - 1 }));
  }

  sayHello() {
    console.log("Hello! Counter action executed.");
  }

  sayWelcome(message) {
    alert(message);
  }

  handlePress(e) {
    // synthetic event
    console.log("Synthetic Event: ", e.type);
    alert("I was clicked");
  }

  handleCurrencyChange(e) {
    this.setState({ rupees: e.target.value });
  }

  convertCurrency(e) {
    e.preventDefault();
    const rupees = parseFloat(this.state.rupees);
    if (isNaN(rupees)) {
      alert("Enter a valid number");
      return;
    }
    const euro = (rupees / 90).toFixed(2); // example rate
    this.setState({ euro });
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Event Examples</h2>
        <div>
          <button onClick={() => { this.increment(); }}>Increment</button>
          <button onClick={this.decrement} style={{ marginLeft: 10 }}>Decrement</button>
          <p>Counter: {this.state.counter}</p>
        </div>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        </div>

        <div style={{ marginTop: 20 }}>
          <button onClick={this.handlePress}>Synthetic OnPress</button>
        </div>

        <div style={{ marginTop: 20 }}>
          <h3>Currency Convertor (INR -- EUR)</h3>
          <form onSubmit={this.convertCurrency}>
            <input
              type="text"
              value={this.state.rupees}
              onChange={this.handleCurrencyChange}
              placeholder="Enter Rupees"
            />
            <button type="submit" style={{ marginLeft: 10 }}>Convert</button>
          </form>
          {this.state.euro && <p>Euro: €{this.state.euro}</p>}
        </div>
      </div>
    );
  }
}

export default EventExamples;
