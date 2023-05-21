import React from "react";
import "./eventDetailsPage.scss";

import ContentWrapper from "../../components/wrappers/Wrapper";
import Carousal from "../../components/carousal/Carousal";

const EventDetailsPage = () => {
  return (
    <div className="eventDetailsPage">
      <Carousal />

      <ContentWrapper>
        <div className="eventDetailsPage__container">
          <div className="eventDetailsPage__container__left">
            <div className="edcl__image">
              <img
                src="https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_1.jpg"
                alt=""
              />
            </div>

            <div className="edcl__details">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. <br />
                <br /> It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                <br /> <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </span>
            </div>

            <div className="edcl__tagButtonContainer">
              <div className="edcl__tagButtonContainer__tag">
                <span>Tag1</span>
              </div>
              <div className="edcl__tagButtonContainer__tag">
                <i className="fas fa-share-alt"></i>
                <i className="fas fa-heart"></i>
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
                    <span>12/12/2020</span>
                  </div>
                </div>

                <div className="edpR__row">
                  <div className="edpR__row__left">
                    <span>Venue:</span>
                  </div>
                  <div className="edpR__row__right">
                    <span>Ewu Campus</span>
                  </div>
                </div>

                <div className="edpR__row">
                  <div className="edpR__row__left">
                    <span>Address:</span>
                  </div>
                  <div className="edpR__row__right">
                    <span>Aftabnagar, Badda, Dhaka 1212</span>
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
                    <span>John Doe</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Email:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>xxx@gmail.com</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Phone:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>+880 01955445464</span>
                  </div>
                </div>

                <div className="orginazerDetails__row">
                  <div className="orginazerDetails__row__left">
                    <span>Description:</span>
                  </div>
                  <div className="orginazerDetails__row__right">
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                    </span>
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
                  <span>$ 1000</span>
                </div>
              </div>

              <div className="getTicket__buttonContainer">
                <button>Get Ticket</button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EventDetailsPage;
