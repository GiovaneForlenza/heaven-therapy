function JourneyCards() {
  const cards = [
    {
      title: "Get in touch.",
      text: "Lorem ipsum odor amet consectetuer adipiscing eli lorem ipsum dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      title: "Begin your journey.",
      text: "Natoque dictumst nascetur placerat aenean suscipit. Curae augue torquent habitasse ullamcorper duis auctor condimentum interdum faucibus erat sapien; aenean sit.",
    },
    {
      title: "Rediscover yourself.",
      text: "Penatibus nibh inceptos potenti curae nibh varius eros lacus. Eros semper a magnis consectetur ante ante. Class vitae nibh dictumst nunc quam pulvinar est. Risus donec blandit.",
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-20 lg:grid-cols-3">
      {cards.map((card, idx) => (
        <div
          className="bg-theme-pink relative mt-20 flex w-full flex-col items-center justify-center gap-10 rounded-3xl px-4 py-15 md:px-10"
          key={idx}
        >
          <div className="bg-theme-brown absolute -top-8 flex h-17 w-17 items-center justify-center rounded-full border-6 border-white font-mono text-2xl text-white md:-top-10 md:h-20 md:w-20">
            {idx + 1}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-theme-brown text-center text-3xl">
              {card.title}
            </h3>
            <p className="text-center">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JourneyCards;
