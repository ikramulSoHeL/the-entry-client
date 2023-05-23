import React, { useEffect, useState } from "react";
import "../../styles/pages/index.scss";

import ContentWrapper from "../../components/wrappers/Wrapper";
import Carousal from "../../components/carousal/Carousal";

import { loadStorage } from "../../utils/persistLocalStorage";
import { Link } from "react-router-dom";

import { getEventById } from "../../apis/event.apis";

const EventDetailsPage = () => {
  const user = loadStorage("user");
  const eventId = window.location.pathname.split("/")[2];

  const [event, setEvent] = useState({});

  useEffect(() => {
    try {
      getEventById(eventId).then((res) => {
        setEvent(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // formate event date
  const eventDate = new Date(event.date).toDateString();

  return (
    <div className="eventDetailsPage">
      <Carousal />

      <ContentWrapper>
        <div className="eventDetailsPage__container">
          <div className="eventDetailsPage__container__left">
            <div className="edcl__container">
              <div className="edcl__image">
                <img
                  src="https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_1.jpg"
                  alt=""
                />
              </div>

              <div className="edcl__details">
                <span>{event.description}</span>
              </div>

              <div className="edcl__tagButtonContainer">
                <div className="edcl__tagButtonContainer__tag">
                  <span>Tags</span>
                </div>
                <div className="edcl__tagButtonContainer__tag">
                  <i className="fas fa-share-alt"></i>
                  <i className="fas fa-heart"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="eventDetailsPage__container__right">
            <div className="edpR__detailsContainer">
              <div className="edpR__detailsContainer__titleAndcart">
                <span>Event Details</span>
                <i className="fas fa-calendar-alt"></i>
              </div>

              <div className="edpR__detailsContainer__details">
                <div className="edpR__row">
                  <div className="edpR__row__left">
                    <span>Start Date:</span>
                  </div>
                  <div className="edpR__row__right">
                    <span>{eventDate}</span>
                  </div>
                </div>

                <div className="edpR__row">
                  <div className="edpR__row__left">
                    <span>Venue:</span>
                  </div>
                  <div className="edpR__row__right">
                    <span>{event.vanue}</span>
                  </div>
                </div>

                <div className="edpR__row">
                  <div className="edpR__row__left">
                    <span>Address:</span>
                  </div>
                  <div className="edpR__row__right">
                    <span>{event.locationAddress}</span>
                  </div>
                </div>
              </div>

              <div className="mapContainer">
                <span>Map:</span>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.406343693923!2d90.42292967501531!3d23.76854037865799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7892dcf0001%3A0x853ad729be4edc71!2sEast%20West%20University!5e0!3m2!1sen!2sbd!4v1684651804726!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="organizers__container">
              <div className="organizerDetails">
                <div className="organizerDetailsr__title">
                  <span>Organizer Details</span>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Name:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>{event.organizerName}</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Website:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>{event.organizerWebsite}</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Phone:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>{event.organizerPhone}</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Description:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>{event.organizerDesc}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="getTicketContainer">
              <div className="getTicketContainer__title">
                <span>Get Ticket</span>
              </div>

              <div className="getTicketContainer__row">
                <div className="getTicketContainer__row__left">
                  <span>Price:</span>
                </div>
                <div className="getTicketContainer__row__right">
                  <span>$ {event.ticketPrice}</span>
                </div>
              </div>

              {user ? (
                <div className="getTicket__buttonContainer">
                  <Link
                    to={`/ticket-details/${event._id}`}
                    className="getTicket__btn"
                  >
                    Get Ticket
                  </Link>
                </div>
              ) : (
                <div className="getTicket__buttonContainer">
                  <Link to="/auth/login" className="getTicket__btn">
                    Get Ticket
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EventDetailsPage;
