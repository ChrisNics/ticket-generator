const Button = ({ title }) => {
  return (
    <button
      type="submit"
      className="relative z-50 mt-5 w-full rounded-lg bg-orange-700 p-3 font-extrabold text-neutral-900"
    >
      {title}
    </button>
  );
};

export default Button;
