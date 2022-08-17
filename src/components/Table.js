import React from "react"
import { Component } from "react"

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button
            onClick={() => {
              props.onRemoveCharacter(index)
            }}
          >
            REMOVE
          </button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData, onRemoveCharacter } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          onRemoveCharacter={onRemoveCharacter}
        />
      </table>
    )
  }
}

export default Table
