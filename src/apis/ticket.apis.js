import axios from "axios";

import { BUY_TICKETS_URL, GET_TICKETS_BY_USERID_URL } from "../utils/urls";

export const buyTickets = (data) => {
  return axios({
    method: "POST",
    url: BUY_TICKETS_URL,
    data: data,
  });
};

export const getTicketsByUserId = (user_id) => {
  return axios({
    method: "GET",
    url: `${GET_TICKETS_BY_USERID_URL}/${user_id}`,
  });
};
