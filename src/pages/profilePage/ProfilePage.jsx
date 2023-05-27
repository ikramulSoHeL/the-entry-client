import React, { useEffect, useState } from "react";
import "../../styles/pages/index.scss";

import Wrapper from "../../components/wrappers/Wrapper";
import { loadStorage } from "../../utils/persistLocalStorage";
import { getTicketsByUserId } from "../../apis/ticket.apis";
import gif from "../../assets/loading/loading_gif.gif";

const ProfilePage = () => {
  const user = loadStorage("user");
  const [loading, setLoading] = useState(false);

  const [tickets, setTickets] = useState([]);
  console.log(tickets);

  useEffect(() => {
    setLoading(true);
    getTicketsByUserId(user._id).then((res) => {
      setTickets(res.data.data);
      setLoading(false);
    });
  }, [user._id]);

  const formateDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "long" });
    const day = d.getDate();
    const year = d.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="profilePage">
      <Wrapper>
        <div className="profiledetailsContainer">
          <div className="profileContailer">
            <div className="profileImage">
              <img
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                alt="profile"
              />
            </div>
            <div className="profileDetails">
              <span>{user.username}</span>

              <span>{user.email}</span>
            </div>
          </div>

          <div className="purchesTicket__container">
            <div className="purchesTicket__header">
              <span>My Tickets</span>
            </div>

            {loading ? (
              <div className="loading">
                <div className="leftLoader">
                  <img src={gif} alt="" />
                </div>
              </div>
            ) : (
              <div className="TicketCardContainer">
                {tickets.length === 0 ? (
                  <div className="noTicket">No Ticket Found</div>
                ) : null}
                {tickets?.map((ticket) => {
                  return (
                    <div className="TicketCard">
                      <div className="TicketCard__header">
                        <span>{ticket.eventId.title}</span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Organized By:</span>
                        <span>{ticket.eventId.organizerName}</span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Date:</span>
                        <span>{formateDate(ticket.eventId.date)} </span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Vanue:</span>
                        <span>{ticket.eventId.vanue}</span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Location:</span>
                        <span>{ticket.eventId.locationAddress}</span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Total Tickets:</span>
                        <span>{ticket.ticketQnt}</span>
                      </div>

                      <div className="ticketCard__row">
                        <span>Total Cost:</span>
                        <span>${ticket.totalPrice}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProfilePage;
