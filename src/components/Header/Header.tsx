import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 px-8 py-4">
      <div className="text-2xl font-bold">
        <h1>TDM</h1>
      </div>
      <h1 className="text-2xl font-bold">TheDailyMeme</h1>
      <div className="text-2xl space-x-10">
        <button>?</button>
        <button>Dark</button>
      </div>
    </div>
  );
};

export default Header;
