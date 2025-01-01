import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, value, onChange, error }) => {
  return (
    <div className="relative mt-5 flex flex-col gap-y-2">
      <p className="">{label}</p>
      <input
        placeholder={placeholder}
        value={value} // Bind the value
        onChange={onChange} // Handle changes
        className={cn(
          "cursor-pointer rounded-lg border border-neutral-300/50 bg-neutral-700/30 p-2 outline-none hover:bg-neutral-500/50",
          {
            "border-orange-700": error, // Highlight border if there's an error
          },
        )}
      />
      {error && (
        <div className="mt-2 flex gap-x-2 text-orange-700">
          <div className="h-[16px] w-[16px] bg-info-red bg-center bg-no-repeat" />
          <p className="text-xs text-orange-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
