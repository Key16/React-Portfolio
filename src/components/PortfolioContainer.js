import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./styles/portfolio.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div class="container-fluid sidebar">
        {/* We are passing the currentPage from state and the function to update it */}
        <div class="row">
          <div class="banner col-3"></div>

          <div class=" col-9 ">
            <div class="row justify-content-end">
              <div class="col-12">
                <NavTabs
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
                {/* Here we are calling the renderPage method which will return a component  */}
              </div>

              <div class="col-12 page "> {renderPage()}</div>
              <div class="col-9 footer ">
                {" "}
                <div class=" p-3">
                  <div class="row align-items-start  text-center">
                    <div class="col-md-4 col-sm-12">
                      <i class="bi bi-geo-alt-fill"></i> Sydney, Aus{" "}
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <i class="bi bi-github"></i> Github:{" "}
                      <a href="github.com/Key16" target="_blank">
                        {" "}
                        Key16
                      </a>{" "}
                    </div>
                    <div class="col-md-4 col-sm-12">
                      <i class="bi bi-linkedin"></i>{" "}
                      <a href="https://au.linkedin.com/" target="_blank">
                        {" "}
                        LinkedIn{" "}
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
