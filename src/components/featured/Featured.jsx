import { PlayArrow, InfoOutlined } from '@material-ui/icons';
import React from 'react';
import "./Featured.scss";

const Featured = () => {
    return (
        <div className="featured"> 
        <img width="100%" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
            <div className="info">
                
                <span className="desc">
                    This is some shity random text
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Featured
