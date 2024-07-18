import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Portfolio = () => {
  return (
    <div>
      <Container fluid className='Portfolio text-white text-center fw-bold' id='Portfolio'>
        <Row>
          <h2 className=' wow fadeInDown'>my Portfolio</h2>
          <p className='mb-5 wow fadeInDown'>Here you can see some of my projects</p>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/Book.png" alt="projects" />
              <div class="icons">
                <p>Books Library</p>
                <a href='https://github.com/nada3laa/react-book-store.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://react-book-store-xi.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/educal.png" alt="projects" />
              <div class="icons">
                <p>Educal - Online Courses</p>
                <a href='https://github.com/nada3laa/Educal-Online-Courses-react.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://educal-online-courses-react.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="/images/projects/cityFood.png" alt="projects" />
              <div class="icons">
                <p>City Food</p>
                <a href='https://github.com/nada3laa/food-ordering-app-react.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://food-ordering-app-react-gamma.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".1s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/Undemy.png" alt="projects" />
              <div class="icons">
                <p>udemy-ecommerce-clone</p>
                <a href='https://github.com/nada3laa/Udemy-Ecommerce-Clone-reat.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://udemy-ecommerce-clone-reat.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/Books-app.png" alt="projects" />
              <div class="icons">
                <p>Book-store-app</p>
                <a href='https://github.com/nada3laa/react-books-app.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://react-books-app-theta.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/dashboard.png" alt="projects" />
              <div class="icons">
                <p>DashBoard</p>
                <a href='https://github.com/nada3laa/React-Admin-Dashboard.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://react-admin-dashboard-ten-alpha.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/cake.png" alt="projects" />
              <div class="icons">
                <p>Cake-Bakery</p>
                <a href='https://github.com/nada3laa/Cake-Bakery.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://cake-bakery-seven.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Col className='mb-4 wow fadeInUp' data-wow-delay=".5s" md="3">
            <div class="projects">
              <img className='img-fluid' src="images/projects/travel.png" alt="projects" />
              <div class="icons">
                <p>Travel-Website</p>
                <a href='https://github.com/nada3laa/travel-website.git' target='_blank' rel="noreferrer"><i className='fab fa-github text-blue m-2'></i></a>
                <a href='https://travel-website-green-nine.vercel.app/' target='_blank' rel="noreferrer"><i className='fas fa-link text-blue m-2'></i></a>
              </div>
            </div>
          </Col>

          <Link className=' wow fadeInUp' data-wow-delay=".6s" to="/allprojects"><button type='button' className='btn btn-primary'>all projects<i className='fas fa-arrow-right ml-2 animate__animated animate__flash animate__infinite animate__slow'></i></button></Link>


        </Row>
      </Container>
    </div>
  )
}

export default Portfolio