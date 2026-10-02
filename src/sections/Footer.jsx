import CTAButton from "../components/CTAButton";

function Footer() {
  const pages = ["About", "Specialties", "What to expect", "Contact"];
  return (
    <div className="bg-theme-green w-full pb-20">
      <div className="flex flex-col items-start justify-between gap-10 px-10 md:flex-row">
        {/* COL 1 */}
        <div className="flex w-full flex-col items-center gap-5 text-white">
          <h3 className="text-center text-2xl">Healing Through Community</h3>
          <p className="text-center text-[14px]">
            Join us for monthly emails to inspire change and healing.
          </p>
          <div className="flex gap-2">
            <input type="text" className="bg-white" />
            <CTAButton text={"SIGN UP"} color="brown" small />
          </div>
        </div>

        {/* COL 2 */}
        <div className="flex w-full flex-col items-center gap-10 text-center text-white">
          <h1 className="text-5xl">Haven</h1>
          <p className="text-[14px]">
            Haven Therapy provides online IFS Therapy & Somatic Therapy in
            California. Specializing in grief & loss, life transitions and
            anxiety.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3">
            {/* LINKEDIN */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25"
              height="25"
              x="0"
              y="0"
              viewBox="0 0 682.667 682"
              className="enable-background:new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M77.613-.668C30.683-.668 0 30.148 0 70.652c0 39.61 29.77 71.305 75.813 71.305h.89c47.848 0 77.625-31.695 77.625-71.305-.894-40.504-29.777-71.32-76.715-71.32M8.11 198.313h137.195V611.07H8.109zM482.055 188.625c-74.012 0-123.64 69.547-123.64 69.547v-59.86h-137.2V611.07h137.191v-230.5c0-12.34.895-24.66 4.52-33.484 9.918-24.64 32.488-50.168 70.39-50.168 49.645 0 69.5 37.852 69.5 93.34V611.07H640V374.402c0-126.78-67.687-185.777-157.945-185.777m0 0"
                  fill="#ffffff"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>

            {/* FACEBOOK */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25"
              height="25"
              x="0"
              y="0"
              viewBox="0 0 155.139 155.139"
              className="enable-background:new 0 0 512 512"
              xml:space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z"
                  fill="#ffffff"
                  data-original="#010002"
                  opacity="1"
                  className="hovered-path"
                ></path>
              </g>
            </svg>

            {/* INSTAGRAM */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25"
              height="25"
              x="0"
              y="0"
              viewBox="0 0 511 511.9"
              className="enable-background:new 0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.93 130.93 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5m-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301m0 0"
                  fill="#ffffff"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5m0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699m0 0"
                  fill="#ffffff"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>

          <CTAButton text={"Schedule a free call"} color="brown" fullSize />
        </div>

        {/* COL 3 */}
        <div className="flex w-full flex-col items-center gap-3 text-center text-white">
          <h3 className="text-center text-2xl">Navigate</h3>
          {pages.map((p, idx) => {
            return (
              <div className="border-b p-1" key={idx}>
                {p}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
