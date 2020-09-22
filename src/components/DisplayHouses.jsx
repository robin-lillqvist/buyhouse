import React, { Component } from 'react'
import { getHouseData } from './GetHouses'

class displayHouses extends Component {
  state = {
    houseList: {}
  }

  componentDidMount () {
    this.getNeighborhoods()
  }

  async getNeighborhoods () {
    let neighborhoods = await getHouseData()
    if (neighborhoods) {
      this.setState({ houseList: neighborhoods })
    }
  }

  render () {
    return <div className='houses'></div>
  }
}

export default displayHouses
