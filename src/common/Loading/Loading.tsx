import './Loading.css';

import { PulseLoader } from 'react-spinners';

const Loading = () => {
    const override: string = "margin: 400pxsdlnvfsdv";

    return (
        <div className="loading">
            <div className="loading-container">
                <PulseLoader color={'lightgray'} css={override} size={15} />
            </div>
        </div>
    )
}

export default Loading;