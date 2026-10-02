import CTAButton from "./CTAButton";

function HelpCards() {
  const helpCards = [
    {
      title: "Depression",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "IFS Therapy",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Somatic Therapy",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Grief & Loss",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Anxiety",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Life Transitions",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];
  return (
    <div className="container-small grid w-full grid-cols-1 gap-4 px-10 md:grid-cols-2">
      {helpCards.map((card) => (
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-white px-10 py-4">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl">{card.title}</h3>
            <p className="text-center text-sm">{card.text}</p>
          </div>
          <CTAButton text={"Learn More"} color={"brown"} />
        </div>
      ))}
    </div>
  );
}

export default HelpCards;
