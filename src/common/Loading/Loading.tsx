import './Loading.css';

import { PulseLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading-container">
                <PulseLoader color={'lightgray'} css="margin: 50px;" size={30} />
            </div>
        </div>
    )
}

export default Loading;