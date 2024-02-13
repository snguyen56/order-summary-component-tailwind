import icon from "./assets/icon-music.svg";
import banner from "./assets/illustration-hero.svg";

function App() {
  return (
    <main className="bg-pale-blue grid h-screen w-screen place-items-center bg-[url('./assets/pattern-background-mobile.svg')] bg-repeat-x md:bg-[url('./assets/pattern-background-desktop.svg')]">
      <div className=" h-[567px] w-[327px] overflow-hidden rounded-[20px] bg-white text-center drop-shadow-2xl">
        <img src={banner} alt="illustration hero" />
        <h1 className="text-dark-blue mt-[30px] text-[22px] font-black">
          Order Summary
        </h1>
        <p className="text-desaturated-blue mt-[15px] px-10 text-[15px] font-medium leading-6">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div>
          <div className="bg-very-pale-blue mx-6 mt-[26px] flex items-center justify-between rounded-xl px-4 py-4">
            <div className="flex items-center gap-[20px]">
              <img src={icon} alt="music symbol icon" />
              <div>
                <h2 className="text-dark-blue text-[14px] font-black">
                  Annual Plan
                </h2>
                <p className="text-desaturated-blue text-[14px] font-medium">
                  $59.99/year
                </p>
              </div>
            </div>
            <a
              href=""
              className="text-bright-blue text-[13px] font-bold underline"
            >
              Change
            </a>
          </div>
        </div>
        <div className="mt-[24px] flex flex-col gap-6 px-6">
          <button className="bg-bright-blue shadow-bright-blue rounded-xl py-[14px] text-[15px] font-bold text-white shadow">
            Proceed to Payment
          </button>
          <a href="" className="text-desaturated-blue text-[15px] font-bold">
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
