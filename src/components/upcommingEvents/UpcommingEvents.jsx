import React from "react";
import "./upcommingEvents.scss";

import Wrapper from "../wrappers/Wrapper";

// icon import
import { GoLocation } from "react-icons/go";

const UpcommingEvents = () => {
  return (
    <div className="upcommingEvents">
      <Wrapper>
        <div className="upcommingEvents__container">
          <div className="upcommingEvents__headerContainer">
            <h1 className="upcommingEvents__headerText">Upcomming Events</h1>
            <span className="upcommingEvents__descText">
              You can configure x closest date to display
            </span>
          </div>

          <div className="upcommingEvent__filterContainer">
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">All</span>
            </div>
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">Conference</span>
            </div>
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">Travel</span>
            </div>
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">Business</span>
            </div>
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">Concert</span>
            </div>
            <div className="upcommingEvent__filterItem">
              <span className="upcommingEvent__filterItemText">Sports</span>
            </div>
          </div>

          <div className="upcommingEvent__cardContainer">
            <div className="upcommingEvent__cardItem">
              <div className="upcommingEvent__cardItemImgContainer">
                <img src="" alt="" />
              </div>
              <div className="upcommingEvent__cardItemTextContainer">
                <span className="upcommingEvent__cardItemText">Event Name</span>
                <span className="upcommingEvent__cardItemText">Event Date</span>
                <span className="upcommingEvent__cardItemText">
                  <GoLocation /> Event Location
                </span>
              </div>
            </div>

            <div className="upcommingEvent__cardItem">
              <div className="upcommingEvent__cardItemImgContainer">
                <img src="" alt="" />
              </div>
              <div className="upcommingEvent__cardItemTextContainer">
                <span className="upcommingEvent__cardItemText">Event Name</span>
                <span className="upcommingEvent__cardItemText">Event Date</span>
                <span className="upcommingEvent__cardItemText">
                  <GoLocation /> Event Location
                </span>
              </div>
            </div>

            <div className="upcommingEvent__cardItem">
              <div className="upcommingEvent__cardItemImgContainer">
                <img src="" alt="" />
              </div>
              <div className="upcommingEvent__cardItemTextContainer">
                <span className="upcommingEvent__cardItemText">Event Name</span>
                <span className="upcommingEvent__cardItemText">Event Date</span>
                <span className="upcommingEvent__cardItemText">
                  <GoLocation /> Event Location
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UpcommingEvents;
