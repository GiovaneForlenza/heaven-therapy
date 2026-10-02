function CTAButton({ text, color = "green", fullSize = false, small = false }) {
  return (
    <button
      className={`rounded-full px-5 py-2 font-mono font-medium text-white ${color === "green" ? "bg-theme-green" : "bg-theme-brown"} ${fullSize ? "w-full" : "w-fit"} text-sm ${small && "text-[12px]"}`}
    >
      {text}
    </button>
  );
}

export default CTAButton;
