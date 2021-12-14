import React, {Component} from 'react';
import DogCard from './DogCard'

class Dogs extends Component {
  render () {
    const {breeds} = this.props

    return (
      <div className="dog=wrapper">
      {breeds && breeds.map(breed => (
        <div key={breeds.id}>
        <span>{`${breed.name}`} </span>
        <BreedCard breedinfo={breed} />
      ))}

    )

  }
}
