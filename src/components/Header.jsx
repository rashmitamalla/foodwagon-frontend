import React from "react";

function Header() {
  return (
    <div>
      <div className="nav-container">
      <div className="nav-sub-conatiner space-x-3">
        <img src="/Mask Group.png" alt="logoname"   className="h-8 w-auto block object-contain"/>
        <img src="/Frame 36.png" alt="logo" className="h-8 w-auto block object-contain"  />
        
      </div>

      <div >
        <p className="nav-sub-conatiner">
          <b>Delivered to:</b>
          <img src="/map-marker-alt.png" alt="map marker" />
          Current Location Balkhu Kathmandu
        </p>
      </div>

      <div className="nav-sub-conatiner" >
        <img src="/Search.png" alt="" />
        <input
          type="search"
          placeholder="Search Food"
          
          className="border-none rounded px-2 py-1 text-black "
        />
        <button className="my-custom-button flex flex-row gap-x-2">
          <img src="/user.png" alt="" />
          Login
        </button>
      </div>
    </div>

    <div >

    </div>
    </div>
    
  );
}

export default Header;
