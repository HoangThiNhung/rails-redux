import React from 'react'
import { connect } from 'react-redux'
import { helloAction } from '../actions/hello_action'
import { bindActionCreators } from 'redux'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.sayHi = this.sayHi.bind(this)
  }

  sayHi(e) {
    const { value }  = e.target
    const { helloAction } = this.props
    helloAction(value)
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <h1>Type anything </h1>
        <h3>{text || "just a dummy h3"}</h3>
        <input type="text" onChange={(e) => this.sayHi(e)} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { text } = state;
  return { text }
}

const mapDispatchToProps = dispatch => {
  return {
    helloAction: (text) => {
      dispatch(helloAction(text))
    }
  }
}

//connect Hello component to Redux store

Hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default Hello
