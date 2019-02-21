/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'
import { ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

// import Background from '../img/background.gif';

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img className="img-fluid med-spaces" src="https://via.placeholder.com/1800x600" alt=" " />
        </div>
      </div>

      <div className="row">
        <section className="col-9">
          <div className="row">
            <div className="col-md-6">
              <Card className="mb-5">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>
        <aside className="col-3">
          <ListGroup flush>
            <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </aside>
      </div>
    </div>


    <Footer />
  </div>
)

export default IndexPage
