import React from 'react';


const Map = (props) => {
  const { center, zoom } = props;
  return (
    <div className='pl-5' >
      <div>
      <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=Stage%20Inn%20Sports%20Bar%20&%20Restaurant&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      </div>
  );
}

export default Map;
