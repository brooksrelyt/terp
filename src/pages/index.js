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
    <div className="container mb-5">
      <div className="row mb-5">
        <div className="col-12">
          <img className="img-fluid med-spaces" src="https://via.placeholder.com/1800x600" alt=" " />
        </div>
      </div>

      <div className="row">
        <section className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/articles">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/articles">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/articles">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/articles">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/articles">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/articles">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/articles">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/articles">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-md-6">
              <Card className="mb-5">
                <a href="/articles">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </a>
                <CardBody>
                  <a href="/articles">
                    <CardTitle>Card title</CardTitle>
                  </a>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <CardText className="footer">
                    <span><a className="comment" href="/">0 Comment</a></span><span className="date">February 21, 2019</span>
                  </CardText>
                </CardBody>
              </Card>
            </div>

          </div>
        </section>
        <aside className="col-md-3">
          <div>
            <ListGroup flush>
              <ListGroupItem disabled tag="a" href="#">Recent Posts</ListGroupItem>
              <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
              <span>February 27, 2019</span>
            </ListGroup>
          </div>

          <div>
            <ListGroup flush>
              <ListGroupItem disabled tag="a" href="#">Web Only</ListGroupItem>
              <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
              <span>February 27, 2019</span>
            </ListGroup>
          </div>

          <div>
            <ListGroup flush>
              <ListGroupItem disabled tag="a" href="#">Popular Posts</ListGroupItem>
              <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
              <span>February 27, 2019</span>
              <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
              <span>February 27, 2019</span>
            </ListGroup>
          </div>
        </aside>
      </div>
    </div>


    <Footer />
  </div>
)

export default IndexPage
