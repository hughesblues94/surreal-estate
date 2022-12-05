import React from 'react';
import '../Styles/alert.css'
import PropTypes from 'prop-types'

const Alert = ({ message, success }) => {
    return (
        <div className={`alert alert-${success ? "success" : "error"}`}>
            {message}
        </div>
    );
};

Alert.defaultProps = {
    success: false,
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    success: PropTypes.bool,
};

export default Alert;