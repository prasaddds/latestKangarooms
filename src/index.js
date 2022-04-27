
import React from 'react';
import ReactDom from 'react-dom';
import Amenities from './RoomComponent';
ReactDom.render(
    <div>
    <Amenities/> <br/> <br/> <br/>
    <Amenities/>
    </div>,
 document.getElementById('root')
);