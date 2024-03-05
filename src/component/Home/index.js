import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'
import './index.css'

class Home extends Component {
  state = {loactionList: [], isLoading: false}

  componentDidMount() {
    this.getLocationList()
  }

  getLocationList = async () => {
    this.setState({
      isLoading: true,
    })
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchData = await response.json()
      const updatedData = fetchData.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))
      this.setState({loactionList: updatedData, isLoading: false})
    }
  }

  renderLocationList = () => {
    const {loactionList} = this.state
    return (
      <ul className="location-list">
        {loactionList.map(location => (
          <LocationContainer key={location.id} locationDetails={location} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        <hr />
        <div className="location-container">
          {isLoading ? this.renderLoadingView() : this.renderLocationList()}
        </div>
      </div>
    )
  }
}
export default Home
