import React, { Component } from 'react';

class VoiceLines extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderLines() {
        let VoiceLineList = this.props.voiceLines.map((el, idx) => {
            return(
                <li key={idx}>{el.question}</li>
            );
        });

        return(
            <ul>
                {VoiceLineList}
            </ul>
        );
    }

    render() {
        return(
            <div className="VoiceLines">
            {this.renderLines()}
            </div>
        );
    }
};

export default VoiceLines;