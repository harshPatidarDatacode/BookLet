import React from "react";
import { FaBell, FaCog, FaSignOutAlt, FaBook, FaHeart, FaTh } from "react-icons/fa";
import "./Dashboard.css"; // Custom CSS

const Dashboard = () => {
  return (
    <div className="d-flex dashboard-container">
      {/* Sidebar */}
      <div className="sidebar p-3">
        <div className="logo mb-5">
          <h4 className="text-white">
            <span className="text-primary">Book</span>Let<span className="text-primary">.</span>
          </h4>
          <p className="text-white small">by Datacode</p>
        </div>

        <div className="nav flex-column">
          <button className="nav-link active">
            <FaTh className="me-2" /> Dashboard
          </button>
          <button className="nav-link">
            <FaBook className="me-2" /> My Collections
          </button>
          <button className="nav-link">
            <FaHeart className="me-2" /> Favourites
          </button>
        </div>

        <div className="sidebar-footer mt-auto">
          <button className="nav-link">
            <FaCog className="me-2" /> Settings
          </button>
          <button className="nav-link">
            <FaSignOutAlt className="me-2" /> Log out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search comics..."
          />
          <div className="d-flex align-items-center gap-3">
            <FaBell color="white" size={20} />
            <img
              src="logo.png"
              alt="avatar"
              className="rounded-circle"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* Highlight Section */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          <div className="card highlight-card">
            <img
              src="signinBatman.png"
              className="card-img"
              alt="Batman"
            />
            <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
              <p className="m-0">Frank Miller</p>
              <h4>Batman: The Dark Knight</h4>
              <button className="btn btn-primary mt-2">Read Now</button>
            </div>
          </div>

          <div className="continue-reading-card">
            <h5 className="text-white fw-bold">Continue Reading</h5>
            <div className="text-center ig">
              <div className="progress-circle">
                <div className="circle-text">39%</div>
              </div>
            </div>
              <p className="text-white mt-2 fw-bold">Kobra Kai: Ultimate</p>
          </div>
        </div>

        {/* Top Rated Section */}
        <div>
          <h5 className="text-white mb-3 fw-bold">Top Rated Comics</h5>
          <div className="d-flex gap-3 flex-wrap justify-content-evenly">
            {[
              {
                img: "flash.png",
                title: "The flash, Vol. 1",
                author: "Joshua Williamson"
              },
              {
                img: "titans.png",
                title: "Titans, Vol. 2",
                author: "Andrew Robinson"
              },
              {
                img: "harley.png",
                title: "Harley Quinn, Vol",
                author: "Jimmy Palmiotti"
              },
              {
                img: "suicide.png",
                title: "Suicide Squad #8",
                author: "Tom Taylor"
              }
            ].map((comic, idx) => (
              <div className="comic-card text-white" key={idx}>
                <img
                  src={comic.img}
                  alt={comic.title}
                  className="comic-img mb-2"
                />
                <h6 className="text-primary fw-bold">{comic.title}</h6>
                <p className="small">{comic.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;