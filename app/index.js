import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Hello from './hello'

class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))