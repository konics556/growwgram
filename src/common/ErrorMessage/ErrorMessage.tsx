import './ErrorMessage.css';

import React from 'react';

function ErrorMessage(props: { message: string }) {
    return (
        <div className="error-message">
            <div className="error-container">
                <span className="message">{props.message}</span>
            </div>
        </div>
    )
}

export default ErrorMessage
