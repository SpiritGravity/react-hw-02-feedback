import { Component } from 'react';
import {Wrapper} from './Wrapper/wrapper.styled';
import Feedback from  './Feedback/feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render () {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div>
      <Wrapper>
      <Feedback>
          options={options}
          onLeaveFeedback={this.leaveFeedback}
      </Feedback>
      </Wrapper> 
      </div>
    )
  }
}

export default App;