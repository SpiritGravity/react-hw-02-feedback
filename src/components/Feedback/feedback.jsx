import PropTypes from 'prop-types';
import { Button } from './feedback.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
            {options.map(option => (
        <Button onClick={onLeaveFeedback}
            key={option}
            name={option}
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
