import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {conditionFirstName: false, conditionLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({
      conditionFirstName: !prevState.conditionFirstName,
    }))
  }

  onClickLastName = () => {
    this.setState(prevState => ({
      conditionLastName: !prevState.conditionLastName,
    }))
  }

  render() {
    const {conditionFirstName} = this.state
    const {conditionLastName} = this.state
    let firstName
    let lastName
    if (conditionFirstName) {
      firstName = <p className="firstName">Joe</p>
    }
    if (conditionLastName) {
      lastName = <p className="lastName">Jonas</p>
    }
    return (
      <div className="bg-container">
        <h1 className="heading-style">Show/Hide</h1>

        <div className="card-container">
          <div className="button-container">
            <button
              className="first-name-button"
              type="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>

          <div className="button-container">
            <button
              className="last-name-button"
              type="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
