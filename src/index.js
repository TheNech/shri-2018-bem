import React from 'react';
import ReactDOM from 'react-dom';
import device from 'current-device';
import { withRegistry } from '@bem-react/di';

import './index.css';
import VideoPage from './components/VideoPage/VideoPage';

if(device.desktop()) {
    import ('./components/VideoPage/VideoPage.Registry/desktop').then(({desktop}) => {
        const Platformed = withRegistry(desktop)(VideoPage);
        ReactDOM.render(<Platformed />, document.getElementById('root'));
    });
} else if(device.mobile()) {
    import ('./components/VideoPage/VideoPage.Registry/touch').then(({touch}) => {
        const Platformed = withRegistry(touch)(VideoPage);
        ReactDOM.render(<Platformed />, document.getElementById('root'));
    });
}

