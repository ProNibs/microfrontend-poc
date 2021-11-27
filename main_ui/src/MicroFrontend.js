import React from 'react';

class MicroFrontend extends React.Component {
    componentDidMount() {
        const { host, name, history} = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        // Some logic to see if scriptId already present
        if (document.getElementById(scriptId)) {
            console.log("Did the quick render.");
            this.renderMicroFrontend();
            return;
        }

        // Fully expect each Micro Front End to serve this file
        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                // Create script tag and define some elements
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                // Get the event listener tied to this javascript
                script.onload = this.renderMicroFrontend;
                //window.addEventListener('DOMContentLoaded', this.renderMicroFrontend);
                //window.addEventListener('load', this.renderMicroFrontend);
                
                // Pull the main.js function/file out of the json
                script.src = `${host}${manifest['main.js']}`;
                
                // Append our script tag to the HTML head area
                document.head.appendChild(script);
           });
    }

    componentWillUnmount() {
        const { name, window } = this.props;
        // Query window dict for unmount function of the container
        window[`unmount${name}`](`${name}-container`);
    }
    
    renderMicroFrontend = () => {
        const { name, window, history } = this.props;
        console.log("Called renderMicroFrontend!");
        window[`render${name}`](`${name}-container`, history);
    }

    render() {
        console.log("Called render() function");
        return (
            <main id={`${this.props.name}-container`}>
                Howdy y'all
            </main>
        );
    }
}

// Default is just the global document and window variables...
MicroFrontend.defaultProps = {
    document,
    window
};

export default MicroFrontend;