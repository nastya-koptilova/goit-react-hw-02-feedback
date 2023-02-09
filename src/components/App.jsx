import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = total => (this.state.good / total) * 100;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <Feedback
            stats={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={this.countPositiveFeedbackPercentage(total)}
            />
          )}
        </Section>
      </>
    );
  }
}
