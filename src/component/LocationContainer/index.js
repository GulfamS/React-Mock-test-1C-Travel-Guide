import {
  LocationCard,
  LocationImage,
  LocationName,
  LocationDescription,
} from './styledComponents'
import './index.css'

const LocationContainer = props => {
  const {locationDetails} = props
  const {imageUrl, name, description} = locationDetails

  return (
    <LocationCard className="location-list-item">
      <LocationImage src={imageUrl} alt={name} />
      <LocationName>{name}</LocationName>
      <LocationDescription>{description}</LocationDescription>
    </LocationCard>
  )
}
export default LocationContainer
