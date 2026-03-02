"use client";
import EventCard from "@/components/EventCard";
import Explorebtn from "@/components/Explore-btn";
import React from "react";
import {events} from "@/lib/constants"
const page = () => {
  return (
    <section>
      <h1 className="text-center mt-10">
        The hub of Every Dev <br /> Event You Can't Miss
      </h1>

      <p className="text-center mt-4">
        Hackathons , meetups, and conference , All in One Place
      </p>
      <Explorebtn />

      <div className="mt-4 space-y-4 ">
        <h1>Featured Event</h1>

        {
          <ul className="events">
            {events.map((event:any) => (
                  <li className="event-card" key={event.id}>
                      <EventCard {...event} />
                  </li>
            ))}
          </ul>
        }
      </div>
    </section>
  );
};

export default page;
