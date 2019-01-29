import React         from 'react';
import Zoom          from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_blue1"></div>
                  <div className="vn_icon" style={{background: `url(${icon_calendar})`}}></div>
                  <div className="vn_title">
                    Event Date & Time
                  </div>
                  <div className="vn_desc" style={{fontSize:'25px', marginBottom:'75px'}}>
                    12 February 2019 @ 17:00
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_blue2"></div>
                  <div className="vn_icon" style={{background: `url(${icon_location})`}}></div>
                  <div className="vn_title">
                    Event Location
                  </div>
                  <div className="vn_desc" style={{marginBottom: '65px'}}>
                    Indonesia Convention Exhibition, Tanggerang, Banten 15339<br/>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;