import React, { useState } from "react";
import "../../styles/components/index.scss";

import Wrapper from "../wrappers/Wrapper";

// icon import
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const UpcommingEvents = ({ data, loading }) => {
  return (
    <div className="upcommingEvents">
      <Wrapper>
        <div className="upcommingEvents__container">
          <div className="upcommingEvents__headerContainer">
            <h1 className="upcommingEvents__headerText">Upcomming Events</h1>
            <span className="upcommingEvents__descText">
              Most Treanding Upcomming Events
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

          {loading ? (
            <div className="loading">
              <h3>Loading.....</h3>
            </div>
          ) : (
            <div className="upcommingEvent__cardContainer">
              {data.map((item, index) => (
                <div className="upcommingEvent__cardItem" key={index}>
                  <div className="upcommingEvent__cardItemImgContainer">
                    <img
                      src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                  </div>

                  <div className="upcommingEvent__dateContainer">
                    <div className="upcommingEvent__dareCircle">
                      <span className="upcommingEvent__dateContainer__date">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="upcommingEvent__cardItemTextContainer">
                    <span className="upcommingEvent__cardItemText__eventName">
                      {item.title}
                    </span>
                    <span className="upcommingEvent__cardItemText__desc">
                      {item.description.slice(0, 100)}......
                    </span>
                    <span className="upcommingEvent__cardItemText__location">
                      <GoLocation /> {item.vanue}
                    </span>
                  </div>

                  <div className="upcommingEvent__priceAndButtonContainer">
                    <Link
                      to={`/event-details/${item._id}`}
                      className="upcommingEvent__priceAndButtonContainer__button"
                    >
                      Buy Ticket
                    </Link>
                    <span className="upcommingEvent__priceAndButtonContainer__price">
                      ${item.ticketPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="allEventsButton__container">
            <Link to="/all-events" className="allEventsButton__text">
              All Events
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default UpcommingEvents;
