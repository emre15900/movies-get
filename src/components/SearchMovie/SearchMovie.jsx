import React from "react";

function SearchMovie() {
  return (
    <div>
      <div className="searchBar">
        <div className="mainSearchBar">
          <h2>Search Movie</h2>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="mainMovie">
        <div className="mainBoxs">
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
          <div className="boxs">
              <img src="https://flxt.tmsimg.com/assets/p27977_p_v13_af.jpg" alt="" />
              <div className="movieInfo">Korkunç Bir Film</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
