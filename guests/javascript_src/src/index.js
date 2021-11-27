import React from 'react';
import ReactDOM from 'react-dom';
import GuestForm from './form';

window.renderGuests = (containerId, history) => {
    ReactDOM.render(
        <Guests history={history} />, 
        document.getElementById(containerId)
    );
}

window.unmountGuests  = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}


class Guests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GuestForm history={history} />
        )
    }
}
