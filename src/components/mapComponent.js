import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const RenderMapComponent = (props) => {
    const latitude = props.latitude;
    const longitude = props.longitude;


    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latitude}
            lng={longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default RenderMapComponent;