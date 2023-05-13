import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Cuc',
        channel: 'CucIuMN'
    }

    handleOnChangeName = (event) => (
        this.setState({
            name: event.target.value
        })
    )

    handleClickButton = () => {
        console.log('hit the button')
        alert('Click me')
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component. My name is {this.state.name}
                </div>
                <div className="second">
                    Welcom to my channel, {this.state['channel']}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;