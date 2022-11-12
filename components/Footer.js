import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 bg-gray-100 px-32 py-14 text-gray-600 md:grid-cols-4">
      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="cursor-pointer font-bold">ABOUT</h5>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
        <p className="cursor-pointer">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="cursor-pointer font-bold">COMMUNITY</h5>
        <p className="cursor-pointer">Accessiblity</p>
        <p className="cursor-pointer">This is not a real site</p>
        <p className="cursor-pointer">{`It's a pretty awesome clone`}</p>
        <p className="cursor-pointer">Referrals accepted</p>
        <p className="cursor-pointer">Saparmy</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="cursor-pointer font-bold">HOST</h5>
        <p className="cursor-pointer">Clever Sap</p>
        <p className="cursor-pointer">Presents</p>
        <p className="cursor-pointer">Airbnb clone</p>
        <p className="cursor-pointer">
          <a href="https://github.com/Saptak-Bose">Github</a>
        </p>
        <p className="cursor-pointer">Check it Out</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:ml-36">
        <h5 className="cursor-pointer font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Chat with Us</p>
        <p className="cursor-pointer">Trust & Safety</p>
        <p className="cursor-pointer">Easter Eggs</p>
        <p className="cursor-pointer">For the win</p>
      </div>
    </div>
  );
};

export default Footer;
