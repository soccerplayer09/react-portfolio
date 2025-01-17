import React from "react";
import { useParams } from "react-router-dom";
import { dataportfolio } from "../../content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const PortfolioDetail = () => {
  const { portfolioId } = useParams(); // Get the portfolio ID from the URL
  const portfolioItem = dataportfolio.find((item) => item.id === portfolioId);

  if (!portfolioItem) {
    return <h1>Portfolio item not found</h1>;
  }

//   return (
//     <div className="portfolio-detail">
//       <h1>{portfolioItem.title}</h1>
//       <img src={portfolioItem.img} alt={portfolioItem.title} />
//       <p>{portfolioItem.description}</p>
//       <a href={portfolioItem.link} target="_blank" rel="noopener noreferrer">
//         View Project
//       </a>
//     </div>
//   );
return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {portfolioItem.title}</title>
          <meta name="description" content={portfolioItem.title} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{portfolioItem.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {/* <Col lg="5">
            <h3 className="color_sec py-4">Demo</h3>
          </Col> */}
          <Col lg="7" className="d-flex align-items-center">
            <div>
              {portfolioItem.demoVideo ? (
                <div className="video-container">
                  {/* Embed the video */}
                  <iframe
                    width="1000"
                    height="500"
                    src={portfolioItem.demoVideo}
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>No demo available.</p>
              )}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Description</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{portfolioItem.description_detail}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Architecture</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <img src={portfolioItem.diagram}
              style={{ width: "100%", maxWidth: "600px", height: "auto" }} 
              />
            </div>
          </Col>
        </Row>
        
      </Container>
    </HelmetProvider>
  );
};
