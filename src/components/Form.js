import React, { Component } from "react"

class Form extends Component {
  state = {
    name: "",
    job: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target
    //or
    // const {
    //   target: { name, value },
    // } = event
    // console.log(name, value)

    this.setState({
      [name]: value,
    })

    // this.setState({
    //   [`${name}-inverse`]: someFn(value),
    // })
  }

  submitFormHandler = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      name: "",
      job: "",
    })
  }

  render() {
    const { name, job } = this.state

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.submitFormHandler}>
          SUBMIT
        </button>
      </form>
    )
  }
}

export default Form
