import React from "react";
import "./upcommingEvents.scss";

import Wrapper from "../wrappers/Wrapper";

// data import
import upcommingEvents from "./data";

// icon import
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

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
            {upcommingEvents.map((item, index) => (
              <div className="upcommingEvent__cardItem">
                <div className="upcommingEvent__cardItemImgContainer">
                  <img src={item.image} alt="" />
                </div>

                <div className="upcommingEvent__dateContainer">
                  <div className="upcommingEvent__dareCircle">
                    <span className="upcommingEvent__dateContainer__month">
                      {item.dateMonth}
                    </span>
                    <span className="upcommingEvent__dateContainer__date">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="upcommingEvent__cardItemTextContainer">
                  <span className="upcommingEvent__cardItemText__eventName">
                    {item.eventName}
                  </span>
                  <span className="upcommingEvent__cardItemText__desc">
                    {item.desc}
                  </span>
                  <span className="upcommingEvent__cardItemText__location">
                    <GoLocation /> {item.location}
                  </span>
                </div>

                <div className="upcommingEvent__priceAndButtonContainer">
                  <Link
                    to="/event-details"
                    className="upcommingEvent__priceAndButtonContainer__button"
                  >
                    Buy Ticket
                  </Link>
                  <span className="upcommingEvent__priceAndButtonContainer__price">
                    ${item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="allEventsButton__container">
            <Link to="/event-details" className="allEventsButton__text">
              All Events
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UpcommingEvents;
