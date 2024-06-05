import { Map, Marker } from "pigeon-maps"

 function MyMap(props) {
  


  return (
    <Map height={300} defaultCenter={props.coordenadas} defaultZoom={11}>
      <Marker width={50} anchor={props.coordenadas} />
    </Map>
  )
}
export default MyMap 