import { useState } from 'react';
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import { GOOD, NEUTRAL, BAD} from "../constants";

export const App = () => {
  const [state, setState] = useState(
    {
      [GOOD]: 0,
      [NEUTRAL]: 0,
      [BAD]: 0
    }
  );

  const { good, neutral, bad } = state;

  const increment = (type) => {
    setState({...state, [type]: state[type] + 1});
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100)
  }

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
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={increment} />
        </Section> 
        
        <Section 
          title="Statistics">
            {countTotalFeedback() > 0 ? (
              <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={countTotalFeedback()} 
                positivePercentage={countPositiveFeedbackPercentage()} 
              />
            )
             : (
              <Notification message="There is no feedback"></Notification>
            )}
        </Section>
      </div>
    );
};