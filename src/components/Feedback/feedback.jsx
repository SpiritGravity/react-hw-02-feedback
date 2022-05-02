import PropTypes from 'prop-types';
import { Button, Title } from './feedback.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        <Title>Please leave feedback</Title>
        {options.map(option => (
        <Button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
        >
            {option}
        </Button>
        ))}
    </div>
    );
};  

FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
};

export default FeedbackOptions;
