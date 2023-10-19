import { Component } from "react";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import { GOOD, NEUTRAL, BAD} from "../constants";

export class App extends Component {
  
   state= {
      [GOOD]: 0,
      [NEUTRAL]: 0,
      [BAD]: 0
    }

  increment = (type) => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100)
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      > 
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.increment} />
        </Section> 
        
        <Section 
          title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={this.countTotalFeedback()} 
                positivePercentage={this.countPositiveFeedbackPercentage()} 
              />
            )
             : (
              <Notification message="There is no feedback"></Notification>
            )}
        </Section>
      </div>
    );
  }
};