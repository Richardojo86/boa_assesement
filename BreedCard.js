import React, {Component} from 'react';

class BreedCard extends Component {
    render() {
      const {Dogs} = this.props


      return (
        <div classname="Dog-wrapper">
        { Dogs && Dogs.map(dog => (
          <div>
          <span> {'Dog Breed: ${dog.breed}'}
        )


      )

    }

}
