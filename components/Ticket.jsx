import Image from "next/image";

const Ticket = ({ formData }) => {
  return (
    <div className="relative mx-auto flex h-[150px] w-[320px] flex-col justify-around bg-ticket bg-contain bg-center bg-no-repeat p-3 sm:h-[200px] sm:w-[420px]">
      <div className="flex flex-col gap-y-2">
        <div className="h-[25px] w-[220px] bg-logo bg-contain bg-no-repeat" />
        <p className="ml-10 text-xs">Jan 31, 2025 / Austin, TX</p>
      </div>

      <div className="flex gap-x-3">
        <div className="relative h-10 w-10 sm:h-14 sm:w-14">
          <Image
            className="rounded-lg"
            fill
            src={formData.avatar}
            alt="Uploaded Avatar"
          />
        </div>

        <div className="flex flex-col text-xl">
          <p>{formData.fullName}</p>
          <div className="flex items-center gap-x-1">
            <div className="h-[20px] w-[20px] bg-github bg-contain bg-no-repeat" />
            <p className="text-xs">{formData.githubUsername}</p>
          </div>
        </div>
      </div>

      <p className="absolute right-0 rotate-90 text-lg text-neutral-500">
        #609123
      </p>
    </div>
  );
};

export default Ticket;
