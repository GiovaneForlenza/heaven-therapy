import therapist2 from "../assets/therapist-2.jpg";
import CTAButton from "../components/CTAButton";

function About() {
  return (
    <div className="py-16">
      <div className="container-big flex grow flex-col items-stretch gap-8 md:flex-row">
        <div className="flex flex-col gap-6 md:w-3/4">
          <p className="font-mono text-lg! capitalize!">Hi, I'm Marisa.</p>
          <h3 className="text-3xl">
            I believe you have the power to create a save haven{" "}
            <span className="italic">within yourself.</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco. Re magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco. Re magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <CTAButton text={"Learn more about me"} color={"green"} fullSize />
        </div>
        <div className="h-auto w-full grow overflow-hidden rounded-3xl md:w-fit">
          <img
            src={therapist2}
            alt=""
            className="h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
