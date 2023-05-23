import React, { useEffect, useState } from "react";
import "../../styles/pages/index.scss";

import Wrapper from "../../components/wrappers/Wrapper";
import { getEventById } from "../../apis/event.apis";
import { buyTickets } from "../../apis/ticket.apis";
import { loadStorage } from "../../utils/persistLocalStorage";
import { useNavigate } from "react-router-dom";

const TicketDetailsPage = () => {
  const navigate = useNavigate();
  const user = loadStorage("user");
  const [qnt, setQnt] = useState(1);
  const [event, setEvent] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [vat, setVat] = useState(0);

  const eventId = window.location.pathname.split("/")[2];

  const handlePlusQnt = () => {
    if (qnt < 5) {
      setQnt(qnt + 1);
    }
  };

  const handleMinusQnt = () => {
    if (qnt > 1) {
      setQnt(qnt - 1);
    }
  };

  useEffect(() => {
    try {
      getEventById(eventId).then((res) => {
        setEvent(res.data.data);
        setUnitPrice(res.data.data.ticketPrice);
        setVat(res.data.data.vat);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setTotalCost(qnt * unitPrice * (1 + vat / 100));
  }, [qnt, unitPrice, vat]);

  const eventDate = new Date(event.date).toDateString();

  let ticketData = {};
  ticketData = {
    userId: user._id,
    eventId: event._id,
    ticketQnt: qnt,
    totalPrice: totalCost,
  };

  const handleBuyTicket = async () => {
    try {
      buyTickets(ticketData).then((res) => {
        ticketData = {
          userId: user._id,
          eventId: event._id,
          ticketQnt: qnt,
          totalPrice: totalCost,
        };

        setTimeout(
          () => {
            navigate(`/profile/${user._id}`);
          },

          1000
        );
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="ticketDetailsPage">
      <Wrapper>
        <div className="ticketDetailsPage_container">
          <div className="ticketDetailsPage__left">
            <div className="tdp__leftContainer">
              <div className="tdp__leftImage">
                <img
                  src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>

              <div className="tdp__leftContent">
                <div className="tdp__leftRow">
                  <div className="tdp__leftRowTitle">
                    <span>Event Name:</span>
                  </div>
                  <div className="tdp__leftRowdetails">
                    <p>{event.title}</p>
                  </div>
                </div>

                <div className="tdp__leftRow">
                  <div className="tdp__leftRowTitle">
                    <span>Event Date:</span>
                  </div>
                  <div className="tdp__leftRowdetails">
                    <p>{eventDate}</p>
                  </div>
                </div>

                <div className="tdp__leftRow">
                  <div className="tdp__leftRowTitle">
                    <span>Event Location:</span>
                  </div>
                  <div className="tdp__leftRowdetails">
                    <p>{event.locationAddress}</p>
                  </div>
                </div>

                <div className="tdp__leftRow">
                  <div className="tdp__leftRowTitle">
                    <span>Organized By:</span>
                  </div>
                  <div className="tdp__leftRowdetails">
                    <p>{event.organizerName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ticketDetailsPage__right">
            <div className="tdp__rightContainer">
              <div className="tdp__rightTitle">
                <h2>Ticket Details</h2>
              </div>

              <div className="tdp__rightRow">
                <div className="tdp__rightRowTitle">
                  <span>Event Name:</span>
                </div>
                <div className="tdp__rightRowdetails">
                  <p>Event 1</p>
                </div>
              </div>

              <div className="tdp__rightRow">
                <div className="tdp__rightRowTitle">
                  <span>Event Date:</span>
                </div>
                <div className="tdp__rightRowdetails">
                  <p>23/5/2023</p>
                </div>
              </div>

              <div className="tdp__rightRow">
                <div className="tdp__rightRowTitle">
                  <span>Ticket Price:</span>
                </div>
                <div className="tdp__rightRowdetails">
                  <input
                    className="priceInput"
                    type="text"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="tdp__rightRow">
                <div className="tdp__rightRowTitle">
                  <span>Quantity:</span>
                </div>
                <div className="tdp__rightRowdetails">
                  <button className="qnt__btn" onClick={handlePlusQnt}>
                    +
                  </button>
                  <input
                    type="number"
                    value={qnt}
                    onChange={(e) => setQnt(e.target.value)}
                  />
                  <button className="qnt__btn" onClick={handleMinusQnt}>
                    -
                  </button>
                </div>
              </div>

              <div className="vatText">
                <p>({event.vat}% VAT Included*)</p>
              </div>

              <div className="tdp__rightRow">
                <div className="tdp__rightRowTitle">
                  <span>Total Cost:</span>
                </div>
                <div className="tdp__rightRowdetails">
                  <input
                    className="priceInput"
                    type="text"
                    value={totalCost.toFixed(2)}
                    readOnly
                  />
                </div>
              </div>

              <div className="paymentMethods__container">
                <div className="paymentMethod__title">
                  <span>Payment Methods</span>
                </div>

                <div className="paymentMethod__logoContainer">
                  <div className="paymentMethod__logo">
                    <img
                      src="https://freelogopng.com/images/all_img/1656234745bkash-app-logo-png.png"
                      alt=""
                    />
                  </div>

                  <div className="paymentMethod__logo">
                    <img
                      src="https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png"
                      alt=""
                    />
                  </div>

                  <div className="paymentMethod__logo">
                    <img
                      src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
                      alt=""
                    />
                  </div>

                  <div className="paymentMethod__logo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8hgrPGW_aZAajlWhJnTI-kesQ9LPX-95ohkP6_DUYjfyYyQWyjq3vVJuL-treRL4C9UE&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="paymentBtn__container">
                <button
                  className="paymentBtn"
                  onClick={() => handleBuyTicket()}
                >
                  Purchase Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TicketDetailsPage;
