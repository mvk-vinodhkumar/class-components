import React, { Component } from "react"

export default class App extends Component {
  state = {
    entries: [],
  }

  //Code will be invoked after the component will be inserted into the DOM
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          entries: data,
        })
      )
  }

  render() {
    const { entries } = this.state
    console.log(entries)

    const content = entries.map((entry, index) => {
      return <li key={index}>entry</li>
    })

    return <div></div>
  }
}
