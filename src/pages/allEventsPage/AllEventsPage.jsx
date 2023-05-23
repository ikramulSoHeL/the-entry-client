import React, { useEffect, useState } from "react";
import "../../styles/pages/index.scss";

import Carousal from "../../components/carousal/Carousal";
import Wrapper from "../../components/wrappers/Wrapper";

// icon import
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const { getEvents } = require("../../apis/event.apis");

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      getEvents().then((res) => {
        setEvents(
          res.data.data.map((item) => ({
            ...item,
            date: new Date(item.date).toDateString(),
          }))
        );
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="allEventsPage">
      <Carousal />
      <Wrapper>
        <div className="upcommingEvents__container">
          <div className="upcommingEvents__headerContainer">
            <h1 className="upcommingEvents__headerText">All Events</h1>
            <span className="upcommingEvents__descText">
              All Events in one place
            </span>
          </div>

          <div className="allEvents__searchContainer">
            <span>Search an event</span>
            <div className="allEvents__searchContainer__search">
              <input
                id="searchTerm"
                type="text"
                placeholder="Search here"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <i className="fas fa-search"></i>
            </div>
          </div>

          <div className="upcommingEvent__cardContainer">
            {events
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, index) => (
                <div className="upcommingEvent__cardItem">
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
                      {item.description.slice(0, 100)}
                    </span>
                    <span className="upcommingEvent__cardItemText__location">
                      <GoLocation /> {item.locationAddress}
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
        </div>
      </Wrapper>
    </div>
  );
};

export default AllEventsPage;
