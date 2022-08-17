import { Component } from "react"
import Form from "./components/Form"
import Table from "./components/Table"

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (id) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((item, index) => {
        return index !== id
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table
          characterData={characters}
          onRemoveCharacter={this.removeCharacter}
        />
        <Form onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
