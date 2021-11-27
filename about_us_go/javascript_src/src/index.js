import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

window.renderAboutUs = (containerId, history) => {
    ReactDOM.render(
        <AboutUs history={history} />, 
        document.getElementById(containerId)
    );
}

window.unmountAboutUS  = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Welcome history={history} />
        )
    }
}
