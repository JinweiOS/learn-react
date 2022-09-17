import React from 'react'

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        // TODO what you want to do
    }

    render() {
        this.props.handleClick('aaaa')
        return (
            <button onClick={() => this.props.handleClick('需要给父组件的数据')}>
                点我
            </button>
        )
    }
}

export default Hello