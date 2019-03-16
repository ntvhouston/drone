import React from "react"
import GoogleMapReact from "google-map-react"

import { Marker } from "./marker"

export default class Map extends React.Component {
    render() {
        const location = {lat: this.props.lat, lng: this.props.lng}
        return (
            <div style={{ height: '90vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyDiojmHwUTYpFu-n_UZ5YXi5WaZWSKDEeQ"}}
                    defaultCenter={{
                        lat: 29.7604,
                        lng: -95.3698
                    }}
                    center={{...location}}
                    zoom={6}>
                    
                    <Marker/>

                </GoogleMapReact>
            </div>
        )
    }
}