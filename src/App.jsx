function App() {
  return (
    <div className="px-3 md:px-40 py-20 flex justify-center">
      <div className="flex flex-col gap-4 bg-white w-[340px] md:w-[420px] rounded-lg shadow-md">
        <div>
          <img
            src="./hero.png"
            alt="hero image"
            className="rounded-t-lg object-cover relative"
          />
          <img
            src="./white-overlay.svg"
            alt="white image"
            className="top-[16rem] md:top-[19rem] absolute w-[340px] md:w-[420px]"
          />
        </div>
        <article className="-py-4 mb-2 px-7 space-y-3">
          <h1 className="font-poppins text-2xl text-[#111729]">
            Perfect solution for small business
          </h1>
          <p className="font-lato text-[#677489] text-base">
            Small businesses need to generate leads to grow. You can use tools
            like Ringy.
          </p>
        </article>

        <span className="border-b"></span>

        <div className="flex flex-row gap-3 items-center py-4 mb-2 px-7">
          <img
            src="./avatar.png"
            alt="avatar image"
            className="w-[50px] h-[50px] rounded-full bg-[#677489]/10 p-1 object-cover"
          />
          <article className="flex flex-col">
            <h2 className="font-poppins text-sm text-[#111729]">Amy Burgess</h2>
            <p className="font-lato text-[#677489] text-xs font-medium">
              Customer Manger, Solution Oy
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
