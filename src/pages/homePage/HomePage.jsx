import React, { useEffect, useState } from "react";
import "../../styles/pages/index.scss";

import Carousal from "../../components/carousal/Carousal";
import UpcommingEvents from "../../components/upcommingEvents/UpcommingEvents";

import { getEvents } from "../../apis/event.apis";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [sliceEvents, setSliceEvents] = useState([]);

  useEffect(() => {
    try {
      getEvents().then((res) => {
        setEvents(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setSliceEvents(
      events
        .slice(0, 6)
        .map((item) => ({ ...item, date: new Date(item.date).toDateString() }))
    );
  }, [events]);

  console.log(events);

  return (
    <div className="homePage">
      <Carousal />
      <UpcommingEvents data={sliceEvents} />
    </div>
  );
};

export default HomePage;
