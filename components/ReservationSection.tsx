"use client";

import { useEffect } from "react";

export default function ReservationSection() {
  const ReservationWidget = () => {
    useEffect(() => {
      window._hors = [
        ["eid", "hydra-43a0e7ef-c875-40e0-b575-5c2f810e622b"],
        ["tagid", "hors-hydra-43a0e7ef-c875-40e0-b575-5c2f810e622b"],
        ["width", "100%"],
        ["height", "450"],
        ["foregroundColor", "#f5f5f5"],
        ["backgroundColor", "#1a1a1a"],
        ["linkColor", ""],
        ["errorColor", ""],
        ["primaryButtonForegroundColor", ""],
        ["primaryButtonBackgroundColor", ""],
        ["secondaryButtonForegroundColor", ""],
        ["secondaryButtonBackgroundColor", ""],
      ];

      const script = document.createElement("script");
      script.src = "https://reservation.dish.co/widget.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <section id="reservation" className="pb-10">
        <h2 className="text-3xl font-bold text-[#d4af37]">
          Reservieren Sie einen Tisch
        </h2>
        <div
          id="hors-hydra-43a0e7ef-c875-40e0-b575-5c2f810e622b"
          className="mt-6"
        ></div>
      </section>
    );
  };
  return <ReservationWidget />;
}
