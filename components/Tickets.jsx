import Ticket from "./Ticket";

const Tickets = ({ formData }) => {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-y-7 lg:gap-y-10">
      <h1 className="text-center text-3xl font-extrabold lg:text-4xl">
        Congrats,{" "}
        <span className="text-gradient">
          {formData.fullName?.split(" ")[0]}
        </span>{" "}
        <span className="text-gradient">
          {formData.fullName?.split(" ").slice(1).join(" ")}
        </span>{" "}
        Your Ticket is ready.
      </h1>
      <h2 className="mx-auto mb-10 mt-4 text-center text-lg lg:max-w-sm">
        We've emailed your ticket to{" "}
        <span className="text-orange-500">{formData.email}</span> and will send
        updates in the run up to the event.
      </h2>

      <Ticket formData={formData} />
    </div>
  );
};

export default Tickets;
