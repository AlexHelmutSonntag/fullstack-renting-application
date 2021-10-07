// import '../styles/App.css'
import React from "react";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FilterTool() {
  return (
    <div className="FilterTool">
      <div className="options">
        <div className="price">
          <div className="title-arrow">
            <div className="title">
              <p>Price</p>
            </div>
            <FontAwesomeIcon
              style={{ fontStyle: "normal" }}
              className="arrow-down"
              icon={faSortDown}
              size="2x"
              color="#fff"
            />
            <FontAwesomeIcon
              className="arrow-up"
              icon={faSortUp}
              size="2x"
              color="#fff"
            />
          </div>
          <div className="drop-down">
            <div>
              <input type="checkbox" />
              <span>Under 50000ft</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>50,000 - 100,000</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>100,000 - 150,000</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>150,000 - 250,000</span>
            </div>
            <div className="all-included">
              <input type="checkbox" />
              <span>All included</span>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="title-arrow">
            <div className="title">
              <p>Location</p>
            </div>
            <FontAwesomeIcon
              className="arrow-down"
              icon={faSortDown}
              size="2x"
              color="#fff"
            />
            <FontAwesomeIcon
              className="arrow-up"
              icon={faSortUp}
              size="2x"
              color="#fff"
            />
          </div>
          <div className="drop-down">
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>

            <div className="all-included">
              <input type="checkbox" />
              <span>All included</span>
            </div>
          </div>
        </div>
        <div className="date">
          <div className="title-arrow">
            <div className="title">
              <p>Date</p>
            </div>
            <FontAwesomeIcon
              className="arrow-down"
              icon={faSortDown}
              size="2x"
              color="#fff"
            />
            <FontAwesomeIcon
              className="arrow-up"
              icon={faSortUp}
              size="2x"
              color="#fff"
            />
          </div>

          <div className="drop-down">
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>

            <div className="all-included">
              <input type="checkbox" />
              <span>All included</span>
            </div>
          </div>
        </div>
        <div className="property-type">
          <div className="title-arrow">
            <div className="title">
              <p>Property type</p>
            </div>
            <FontAwesomeIcon
              className="arrow-down"
              icon={faSortDown}
              size="2x"
              color="#fff"
            />
            <FontAwesomeIcon
              className="arrow-up"
              icon={faSortUp}
              size="2x"
              color="#fff"
            />
          </div>
          <div className="drop-down">
            <div>
              <input type="checkbox" />
              <span>Shared room</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>room</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>studio</span>
            </div>
          </div>
        </div>
      </div>
      <div className="action-btn-filter">
        <button>Filter</button>
      </div>
    </div>
  );
}
