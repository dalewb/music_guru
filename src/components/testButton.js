import React from 'react';
import {PYTHON_API_GET} from '../constants/urlConstants'

class TestButton extends React.Component {
    state = {
        "text": ''
    }

    pythonApiGetRequest = () => {
        fetch(PYTHON_API_GET)
        .then(response => response.json())
        .then(data => this.saveApiResponse(data))
    }

    saveApiResponse = (data) => {
        console.log(data)
        this.setState({"text": data.greetings})
    }

    handleButtonClick = () => {
        this.pythonApiGetRequest()
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleButtonClick}
                >
                    Click Me
                </button>
                <p>{this.state["text"]}</p>
            </div>
        )
    }
}

export default TestButton