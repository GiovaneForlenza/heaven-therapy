import JourneyCards from "../components/JourneyCards";

function HowItWorks() {
  return (
    <div className="py-24">
      <div className="container-big flex flex-col items-center justify-center gap-6">
        <p className="font-mono capitalize!">How it works</p>
        <h2 className="text-center text-4xl">
          What you need now is <span className="italic">ease</span>. I’m here to
          help you <span className="italic">simplify</span> the process as you
          begin your journey.
        </h2>
      </div>
      <JourneyCards />
    </div>
  );
}

export default HowItWorks;
