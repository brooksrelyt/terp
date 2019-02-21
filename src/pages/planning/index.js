import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';

import classnames from 'classnames';

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Banner from "../../img/banner-small.gif"
import Ag from "../../img/icons/ag-day.gif"
import Art from "../../img/icons/artanddesign.gif"
import Sport from "../../img/icons/sports.gif"
import Science from "../../img/icons/science.gif"
import Terptown from "../../img/icons/terp-town.gif"

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      modal: false
    };

    this.modalToggle = this.modalToggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  modalToggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    return (
      <Layout>
	    <SEO title="Maryland Day 2019 Planning" />
	    <div className="spaces">
	    	<div className="row">
	    		<div className="col-md-3 sidebar">
	    			<Nav tabs>
	    					<NavItem className="navitem-title">
			              Maryland Day Planning Site
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '1' })}
			              onClick={() => { this.toggle('1'); }}
			            >
			              Welcome
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '2' })}
			              onClick={() => { this.toggle('2'); }}
			            >
			              Event Overview
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '3' })}
			              onClick={() => { this.toggle('3'); }}
			            >
			              Learning Neighborhoods
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '4' })}
			              onClick={() => { this.toggle('4'); }}
			            >
			              Important Dates
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '5' })}
			              onClick={() => { this.toggle('5'); }}
			            >
			              Event Action Items
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '6' })}
			              onClick={() => { this.toggle('6'); }}
			            >
			              Program Policies
			            </NavLink>
			          </NavItem>
			          <NavItem>
			            <NavLink
			              className={classnames({ active: this.state.activeTab === '7' })}
			              onClick={() => { this.toggle('7'); }}
			            >
			              Best Practices
			            </NavLink>
			          </NavItem>
			          {/* <a className="btn side-event-btn" href="https://mddayapp.umd.edu/">Submit Event</a> */}
			        </Nav>
	    		</div>
	    		<div className="col-md-9">
	    			<TabContent activeTab={this.state.activeTab}>
			          <TabPane tabId="1">
			            <Row>
			              <Col sm="12">
			              	<img className="img-fluid" src={Banner} alt=" " />
			                <h2 className="crimson red">Welcome</h2>
			                <hr className="hr-lrg" />
			                <p>Maryland Day is the university's largest community outreach event. The University of Maryland opens its doors and invites the community to enjoy a day of learning, fun and discovery. Attendees are encouraged to explore our world of Fearless Ideas.</p>
			                <h5>Maryland Day 2019</h5>
			                <br />
			                <ul className="list-unstyled">
												<li>Saturday, April 27, 2019</li>
												<li>10 a.m.-4 p.m.</li>
												<li>Free admission and parking</li>
												<li><a href="https://marylandday.umd.edu/">marylandday.umd.edu</a></li>
												<li>#MarylandDay</li>
			                </ul>
			                <hr />
			                <p>This site has been designed to support the efforts of the Maryland Day Planning Committee. Members will find beneficial information including important deadlines, meeting dates, tips and more. We appreciate the committee’s efforts and commitment to making Maryland Day a premier grassroots event in the Mid-Atlantic region that showcases the best of UMD. </p>
			                <hr />
			                <h5>Contact</h5>
			                <p>Cynthia Martinez<br /> 
													Director, Brand Marketing<br /> 
													Office of Strategic Communications<br /> 
													<a href="mailto:marylandday@umd.edu">marylandday@umd.edu</a><br /> 
													301-405-9992</p>

			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="2">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Event Overview</h2>
			                <hr className="hr-lrg" />
			                <ul>
												<li>Maryland Day is the University of Maryland’s largest community outreach event.</li>
												<li>The event is held annually on the last Saturday of April from 10 a.m. to 4 p.m. and was established in 1999. </li>
												<li>UMD opens its doors and invites the community to enjoy a day of learning, fun and discovery.</li>
												<li>Guests can enjoy more than 400 activities including hands-on demonstrations, exhibits, workshops, performances, cross-campus tours, lectures, a petting zoo and athletic events.</li>
												<li>The event celebrates specific themes in its five neighborhoods: Ag Day Avenue, Arts & Design Place, Science & Tech Way, Sports & Rec Row and Terp Town Center. </li>
												<li>Maryland Day is held across the University’s 1,250-acre College Park campus both indoors and outdoors.</li>
												<li>Attendees include current and prospective students, donors and alumni, faculty and staff, business and legislative leaders, families and friends, and residents of the Mid-Atlantic Region.</li>
												<li>The official hashtag for the event is #MarylandDay.</li>
												<li>Over 86,000 people attended Maryland Day 2018. </li>
			                </ul>
			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="3">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Event Overview</h2>
			                <hr className="hr-lrg" />
			                <div className="row">
			                	<div className="col-md-2">
			                		<img className="img-fluid" src={Ag} alt=" " />
			                	</div>
			                	<div className="col-md-10">
			                		<p className="bold">Ag Day Avenue</p>
			                		<p>What began more than 150 years ago as the Maryland Agricultural College has grown into a world-class public research institution. Explore Ag Day Avenue to learn why the College of Agriculture and Natural Resources is not just about farming.</p>
			                	</div>
			                </div>
			                <hr />
			                <div className="row">
			                	<div className="col-md-2">
			                		<img className="img-fluid" src={Art} alt=" " />
			                	</div>
			                	<div className="col-md-10">
			                		<p className="bold">Art &amp; Design Place</p>
			                		<p>Indulge your artistic talents and meet scores of student and faculty performers and artists. After taking in performances at the Clarice Smith Performing Arts Center, head over to the Parren J. Mitchell Art-Sociology and Architecture buildings to see more creative events, and enjoy crafts at Tawes Plaza. Activities by the Philip Merrill College of Journalism and College of Education are also in this area.</p>
			                	</div>
			                </div>
			                <hr />
			                <div className="row">
			                	<div className="col-md-2">
			                		<img className="img-fluid" src={Sport} alt=" " />
			                	</div>
			                	<div className="col-md-10">
			                		<p className="bold">Sport &amp; Rec Row</p>
			                		<p>Have you ever wanted to climb Mt. Everest, fly through the air like a gymnast, interact with a robot or been curious about how healthy you really are? If so, Sports & Rec Row is a must on your Maryland Day list! From adventure to health screenings, all is “well” here.</p>
			                	</div>
			                </div>
			                <hr />
			                <div className="row">
			                	<div className="col-md-2">
			                		<img className="img-fluid" src={Science} alt=" " />
			                	</div>
			                	<div className="col-md-10">
			                		<p className="bold">Science &amp; Tech Way</p>
			                		<p>Science&mdash;whether physics, biology, engineering or chemistry&mdash;is for everyone. Learn about laser technology and extreme robotics, then get blasted in the Glenn L. Martin Wind Tunnel. Explore the brain, outer space, augmented reality and the weather.</p>
			                	</div>
			                </div>
			                <hr />
			                <div className="row">
			                	<div className="col-md-2">
			                		<img className="img-fluid" src={Terptown} alt=" " />
			                	</div>
			                	<div className="col-md-10">
			                		<p className="bold">Terp Town Center</p>
			                		<p>McKeldin Mall, the Stamp Student Union and the surrounding areas become Terp Town Center. Learn about our schools and colleges, catch a live performance at the main stage and meet the men’s and women’s basketball teams. Find a bite to eat, and don’t miss the kids’ carnival featuring the boot camp obstacle course and inline extreme air quad jumpers.</p>
			                	</div>
			                </div>
			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="4">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Important Dates</h2>
			                <hr className="hr-lrg" />
			                <div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Dec. 6</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">11 a.m. Planning Committee Meeting</h3>
			                		<p className="event-sub no-marg-b">Atrium, Adele H. Stamp Student Union - Center for Campus Life</p>
			                	</div>
		                	</div>


		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Feb. 15</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">2:15 p.m. Planning Committee Meeting</h3>
			                		<p className="event-sub no-marg-b">1224, Edward St. John Learning & Teaching Center</p>
			                	</div>
		                	</div>


		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Feb. 15</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">All event submissions due</h3>
			                		<p className="event-sub no-marg-b">Click the button to the right to submit your event(s).</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://mddayapp.umd.edu/"><i></i><span>Submit Event</span></a>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Feb. 22</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">All marketing material requests</h3>
			                		<p className="event-sub no-marg-b">Click the button to order your Maryland Day marketing materials.</p>
			                		<p className="event-sub no-marg-b">Click the button to order your Maryland Day T-shirts.</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://mddayapp.umd.edu/OrderMarketingMaterials.html"><i></i><span>Materials</span></a>
			                		<a className="event-btn" href="https://mddayapp.umd.edu/OrderT-Shirts.html"><i></i><span>Order T-shirts</span></a>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Feb. 28</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">All tent and equipment reservations will go through the Office of Strategic Communications</h3>
			                		<p className="event-sub no-marg-b">Click the button to submit your order.</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<Button className="event-btn" onClick={this.modalToggle}><i></i><span>Submit Order</span></Button>
			                	</div>
		                	</div>

		                	<Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
							          <ModalHeader toggle={this.modalToggle}>Tent and Equipment Reservations</ModalHeader>
							          <ModalBody>
							            <iframe title="Maryland Day 2019: Orders" src="https://docs.google.com/forms/d/e/1FAIpQLScm3xMtmmLK4GSufT57K28nkA-Yt0hKKkPbcRhB8ATcV6UDlg/viewform?embedded=true" width="640" height="1435" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
							          </ModalBody>
							        </Modal>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Mar. 4</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">One-day Food Permits</h3>
			                		<p className="event-sub no-marg-b">All one-day food permit applications are due to the county. <a href="https://www.princegeorgescountymd.gov/1987/Temporary-Food-Service-Facility-Permits">Click here</a> to access the Prince George’s County Health Department temporary food permit application.</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://www.princegeorgescountymd.gov/1987/Temporary-Food-Service-Facility-Permits"><i></i><span>Food Permits</span></a>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Mar. 14</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">11:30 a.m. Planning Committee Meeting</h3>
			                		<p className="event-sub no-marg-b">Atrium, Adele H. Stamp Student Union - Center for Campus Life</p>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Mar. 15</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">Volunteer lunch requests due</h3>
			                		<p className="event-sub no-marg-b">Click the button to the right to order your Maryland Day lunches.</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://mddayapp.umd.edu/OrderLunch.html"><i></i><span>Order Lunches</span></a>
			                	</div>

			                	
			                	<div className="med-spaces no-pad-b special row">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date"></p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">5-, 10-, 15-, 20-year volunteer recognition lists due</h3>
			                		<p className="event-sub no-marg-b">Click the button to the right to submit your honorees.</p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://docs.google.com/spreadsheets/d/1mgMOEY3EL4R_7Kdw8rdm3X1m_mYj6lbCxZV9fnF7Os8/edit?usp=sharing"><i></i><span>Submit Honorees</span></a>
			                	</div>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Mar. 22</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">Event sign orders due to the Signs and Graphics Shop</h3>
			                		<p className="event-sub no-marg-b">Click the button to the right to place your order. For questions contact Stefan Sallet at <a href="mailto:ssallet@umd.edu">ssallet@umd.edu</a></p>
			                	</div>
			                	<div className="col-lg-4 col-md-12">
			                		<a className="event-btn" href="https://www.facilities.umd.edu/sitepages/signabout.aspx"><i></i><span>Order Signage</span></a>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Apr. 25</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">11 a.m. Planning Committee Meeting</h3>
			                		<p className="event-sub no-marg-b">Atrium, Adele H. Stamp Student Union - Center for Campus Life</p>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">Apr. 27</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">10 a.m.-4 p.m. Maryland Day</h3>
			                	</div>
		                	</div>

		                	<div className="row med-spaces mdday-event">
			                	<div className="col-lg-1 col-md-3 col-sm-12">
			                		<p className="event-date">May 15</p>
			                	</div>
			                	<div className="col-lg-7 col-md-9">
			                		<h3 className="no-marg">12 p.m. Planning Committee Meeting <small className="gray">*By Invitation Only</small></h3>
			                		<p className="event-sub no-marg-b">University House</p>
			                	</div>
		                	</div>


			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="5">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Event Action Items</h2>
			                <hr className="hr-lrg" />

			                <p className="acc-main-title">Event Submission</p>

			                <Accordion>
			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Submitting Events<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <ul>
															<li><a href="https://mddayapp.umd.edu">Visit Event Submission Site</a></li>
															<li>Enter event information including title, description, start/end times, preferred location (building, room name/number) and sponsoring department.</li>
			                      </ul>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Sample Event<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p><b>Title:</b> Engineering Challenge: An Obstacle Course for Mind and Body<br />
															<b>Description:</b> Challenge yourself on an obstacle course for the mind and body designed and built by engineering students.<br />
															<b>Start/End Time:</b>	10 a.m. - 4 p.m.<br />
															<b>Location:</b> Front Lawn, Glenn L. Martin Building<br />
															<b>Sponsor:</b> ENGR (A. James Clark School of Engineering)</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Proofing<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                    <ul>
														<li>Return to the Event Submission Site that will be formatted for "read only."</li>
														<li>Confirm that all your event details are listed.</li>
														<li>Double-check your event details for accuracy.</li>
														<li>Contact Cynthia Martinez at <a href="mailto:cynthia1@umd.edu">cynthia1@umd.edu</a> with edits or concerns.</li>
													</ul>
			                    </AccordionItemBody>
			                  </AccordionItem>
			                </Accordion>

			                <br />
			                <p className="acc-main-title">Event Promotion</p>

			                <Accordion>
			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Marketing Materials<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Marketing materials are FREE and the best way for you to spread the word to your target communities.</p>
			                      <p>Be sure to specify the quantity of each item that you need. We will do our best to accommodate your order as supplies allow. Once your order is ready, we will contact you for pickup.</p>
														<p>Please <a href="https://mddayapp.umd.edu/OrderMarketingMaterials.html">submit</a> your marketing orders by Friday, February 22.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Campus Cross-Promotion<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Highlight Maryland Day in your online, social media and publications; use marketing materials to complement your promotional efforts. The official Maryland Day hashtag is #MarylandDay.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>
			                </Accordion>

			                <br />
			                <p className="acc-main-title">Day of Event</p>

			                <Accordion>
			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">	Contacting the Command Center<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>On Maryland Day, Vice President Carlo Colella's office (2119 Main Administration Building) becomes the official Command Center.</p>
			                      <p>Conferences and Visitor Services expertly staffs and directs the Command Center. Working with them is a stellar team of campus folks from ranging from Public Safety to Facilities Management, from Dining Services to Housekeeping and more. The team works in shifts throughout the day to ensure your needs are met.</p>
			                      <p>If you need any assistance with important visitor requests, needs or general event support, simply call the Maryland Day Command Center at 301.405.1106 and staff there will do their best to take care of you so you can take care of campus visitors.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">First Aid and Safety<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>A first–aid station is always located on McKeldin Mall and the University Health Center is also open. Exact locations are well marked on the program booklet map.</p>
														<p>In the event of severe weather or imminent danger, campus sirens will sound to signal all on campus to seek shelter in the nearest building.</p>
														<p>In the event of a lost visitor, follow Lost Person Protocol.</p>
														<hr />
														<p className="bold">Day of Event</p>
														<p>Emergency: CALL 911</p>
														<p>Police Non-emergency: 301.405.3555</p>
														<p>Health Center: 301.314.8180</p>
														<p>Maryland Day Command Center: 301.405.1106</p>

			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Restrooms<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Restrooms are available in every building on campus. Most buildings are open for Maryland Day and are marked for your convenience. For a listing of all restroom locations, refer to the Maryland Day map.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Parking<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Parking is free. Follow directional signs and traffic attendants to event parking areas. Please do not park in fire lanes. Disabled parking areas are reserved for vehicles displaying state-issued disabled permit. </p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Campus Shuttle<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Visitors can cover more ground if they use Shuttle-UM, which runs continuously all day. See the Maryland Day map for shuttle bus stops. Visitors simply board the red and white buses, free of charge, at bus stops along the designated routes.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Food<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>There will be plenty of meals, snacks and drinks available for purchase all over campus. When those hunger pangs hit, here's where you can find something good to eat. </p>
														<p>* Note: Listings are subject to change from year to year and all locations proudly serve Pepsi products. For a listing of all dining locations, refer to the Maryland Day application. </p>
														<hr />
														<p className="bold">On the Mall (Coming Soon)</p>
														<hr />
														<p className="bold">Near the Mall (Coming Soon)</p>
														<hr />
														<p className="bold">Stamp (Coming Soon)</p>
														<hr />
														<p className="bold">Clarice Smith Performing Arts Center (Coming Soon)</p>
														<hr />
														<p className="bold">The Diner at Ellicott (Coming Soon)</p>
														<hr />
														<p className="bold">South Campus Dining Room (Coming Soon)</p>
														<hr />
														<p className="bold">Sneaker’s Café, Eppley Recreation Center (Coming Soon)</p>
			                    </AccordionItemBody>
			                  </AccordionItem>
			                </Accordion>

			                
			                
			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="6">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Program Policies</h2>
			                <hr className="hr-lrg" />

			                <Accordion>
			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Space and Facility Reservation<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>All campus facilities and spaces are reserved for Maryland Day, held annually on the last Saturday in April. Non-Maryland Day activities are prohibited between 10 a.m. and 4 p.m.</p>
			                      <hr />
			                      <p className="bold">Rationale</p>
			                      <p>Resources for parking, room reservations, public safety and traffic control are devoted to the considerable number of visitors that day. </p>
			                      <p className="bold">Exceptions</p>
			                      <p>On the rare occasion that an unrelated activity must be held on Maryland Day, a request from the appropriate dean or vice president must be forwarded to the vice president for university relations and the Maryland Day Steering Committee, for consideration and resolution. Requests should be made no later than January 31 in order to consider facility and parking implications. </p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Free Activities<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>All Maryland Day activities are free of charge on Maryland Day. Fees for services, programs or admission are prohibited. Sales of merchandise are restricted to those campus operations that normally process retail transactions.</p>
			                      <hr />
			                      <p className="bold">Rationale</p>
			                      <p>The program is explicitly designed to offer the community a fun, free day for families to meet students, faculty and staff; explore campus; and discover more about their state flagship university. In addition, informal and non-secure money transactions would create concerns about criminal activity and distract Public Safety staff from other identified priorities on Maryland Day.</p>
			                      <p className="bold">Exceptions</p>
			                      <p>Only approved campus retailers including the University Bookstore, the Xfinity Center store and respective Dining Services sites are equipped to securely manage transactions and approved to sell products. In addition, Ag Day programs that started before Maryland Day (such as the alumni breakfast) will be permitted.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Beverage Policy<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>The policy of the University of Maryland is that only beverages produced or distributed by Pepsi, including but not limited to carbonated soft drinks, bottled waters (still, sparkling and flavored), non-carbonated beverages, juices, ready-to-drink coffees and teas, energy drinks, sports drinks, energy chews and isotonics may be purchased using university funds or served, dispensed or otherwise made available with or without charge at events on the College Park campus.</p>
			                      <hr />
			                      <p className="bold">Rationale</p>
			                      <p>This policy shall apply to contractors, licensees, caterers or others who may be serving or dispensing beverages on campus with or without charge.</p>

														<p>The policies and procedures described herein shall be applicable to all procurements made by the University of Maryland College Park via the Department of Procurement and Supply or by any other unit exercising delegated procurement authority under Policy VIII-3.10(B).</p>

														<p>All procurements and delegated procurements which provide university funds for beverages on campus, including but not limited to caterers, contractors or others, must comply with this policy.</p>

														<p>All units of the university shall be responsible for compliance with this policy whether by the unit's staff, agents, invited guests or others, whether paying for beverages using university purchase orders; university cashless electronic payment devices; reimbursing an entity or individual for the purchase of beverages from a grocery store, restaurant or other distributor; or receiving the product at no charge.</p>

														<p>This policy shall not apply to university funds used for purchase of beverages made during off campus travel or for off campus university events where beverages produced or distributed by Pepsi are not available, after request to Pepsi.</p>

														<p>Contact the Department of Procurement of Supply with any questions.</p>

														<p>The major Pepsi brands are listed below. Each brand has multiple flavors and varieties.</p>
														<hr />
														<p className="bold">Major Approved Pepsi Brands include:</p>
														<div className="row">
															<div className="col-md-6">
																<ul>
																	<li>Aqua Fina Bottled Water</li>
																	<li>Lipton Bottled Teas</li>
																	<li>Starbuck's Bottled Coffees</li>
																	<li>Dole Juices</li>
																	<li>Tropicana Juices</li>
																	<li>Gatorade</li>
																	<li>Life WTR</li>
																	<li>Sobe</li>
																</ul>
															</div>
															<div className="col-md-6">
																<ul>
																	<li>Muscle Milk</li>
																	<li>Pepsi, Diet Pepsi and their various flavors</li>
																	<li>Mountain Dew and its various flavors</li>
																	<li>Sierra Mist</li>
																	<li>Dr Pepper</li>
																	<li>Schweppes Ginger Ale and mixers</li>
																	<li>Voss Water</li>
																	<li>Bubbly Flavored Sparkling Water</li>
																</ul>
															</div>
														</div>
														<hr />

			                      <p className="bold">Exceptions</p>
			                      <p>This requirement does not apply to dairy products; bottled water in containers larger than 1 gallon; alcoholic beverages, fresh brewed coffee and tea; and freshly made to order juices; OR to beverages purchased by individuals for their own consumption.  </p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Weapons Policy<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>For most organizations, use or display of weapons of any kind is prohibited during Maryland Day. Activities sponsored by organizations that use weapons as a central component of their mission or purpose (e.g., Air Force and Army ROTC, Paintball Club) may display such weapons, but they may not be demonstrated, used or handled during Maryland Day. The sponsoring organization will be responsible for security and safety of weapons, making sure that all precautions are taken to ensure the safety of visitors.</p>
			                      <hr />
			                      <p className="bold">Rationale</p>
			                      <p>A key audience for Maryland Day is families with young children. The program focuses on the core values of learning, exploration and discovery. A safe environment is a priority on Maryland Day.</p>
			                      <p className="bold">Exceptions</p>
			                      <p>Any department or organization wishing to display weapons must share its plans for display and safety precautions in description of program during event submission process. All program submissions proposing display of weapons will be reviewed and confirmed by January 31. No programs proposing to display weapons will be approved after this date.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Corporate Sponsor Policy<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Sponsorship for Maryland Day will be fostered with partners who have an existing vending or corporate relationship with the university, and the sponsorship will be linked to an appropriate program or activity that supports the Maryland Day mission of learning and exploration.</p>
			                      <p>Most sponsorship for Maryland Day will be handled centrally, but all departments seeking corporate sponsors for their programs must receive university approval. Campus departments must coordinate their sponsorship plans with the Maryland Day staff and Corporate and Foundation Relations staff. All other non-campus organizations are prohibited.</p>
			                      <hr />
			                      <p className="bold">Rationale</p>
			                      <p>Sponsorship with existing partners assists in defraying the costs of Maryland Day without passing those costs on to visitors or participating departments. The university screens all organizations interested in aligning with campus in order to coordinate sponsorship plans and monitor concerns about the program becoming inappropriately commercial.</p>
			                      <p className="bold">Exceptions</p>
			                      <p>There are no exceptions.</p>
			                    </AccordionItemBody>
			                  </AccordionItem>
			                </Accordion>
			                
			              </Col>
			            </Row>
			          </TabPane>

			          <TabPane tabId="7">
			            <Row>
			              <Col sm="12">
			                <h2 className="crimson red">Best Practices</h2>
			                <hr className="hr-lrg" />

			                <Accordion>
			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Submitting Events<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <ul>
															<li>The department committee chair sends an email to faculty and staff indicating when to submit events for Maryland Day. This email includes the names of each unit representative and encourages faculty and staff to contact their respective unit representative if they have an activity to submit.</li>
															<li>The department committee chair also sends an email to students indicating when to submit events, as some student project teams and groups sponsor their own events. </li>
															<li>Tip: The committee chair should work through the student council to coordinate student organization and involvement.</li>
															<li>Each unit representative identifies potential activities in their area and solicits faculty and staff involvement.</li>
															<li>All unit representatives email their event submissions to the committee chair for review and submission at the campus level. Tip: The chair should know what is being submitted in order to identify units that are slow in responding. This system also allows for the chair to identify and resolve any concerns early in the process.</li>
															<li><a href="https://mddayapp.umd.edu/">Click here</a> to submit your event.</li>
			                      </ul>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Placing Facility Orders<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                      <p>Each unit processes its own facility order or its own unit’s events.</p>
														<p>The department committee chair orders the major facility needs and assists student units with orders.</p>
														<p className="bold">Tips:</p>
														<ul>
															<li>Submit your facilities order early.</li>
															<li>Stay on top of your order.</li>
															<li>Check your order when it is delivered. If it isn’t delivered on time, call.</li>
															<li>Make sure you have lots of signs, especially for events in buildings.</li>
															<li>Post signs and building maps at all entrances.</li>
															<li>Post signs for restrooms.</li>
															<li>Collect and store your signs at the end of the day for reuse next year.</li>
														</ul>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">General Program Tips<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                    <ul>
														<li>Order tents for outdoor events. They offer shelter from the rain or sun.</li>
														<li>Have a cell phone. You never know when you may need to call the Command Center.</li>
														<li>Have water and sunscreen available for volunteers.</li>
														<li>Have large trash bags for the end-of-day cleanup and other needs.</li>
														<li>Make and liberally distribute copies of the campus committee handouts.</li>
														<li>Train volunteers to know the lost-person protocol, what to do in emergencies, and where to find the nearest information booth, food station and restrooms.</li>
														<li>Solicit feedback from event coordinators after the event.</li>
														<li>Encourage all event coordinators and volunteer staff to complete a campus evaluation.</li>
														<li>Smile and have fun.</li>
													</ul>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Organizing Department Participation<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                    <ul>
														<li>Treat Maryland Day as an important outreach and recruitment activity for your department.</li>
														<li>Consider having a member of the dean’s or director’s staff serve as the department’s committee chair, attend campus wide meetings and coordinate the department’s planning.</li>
														<li>Chairs recruit representatives from major units in the department to serve on the department committee and be responsible for coordinating activities in that unit.</li>
														<li>Chair schedules a meeting of the department committee at the start of planning, then manages other items by email or phone.</li>
													</ul>
			                    </AccordionItemBody>
			                  </AccordionItem>

			                  <AccordionItem>
			                    <AccordionItemTitle>
			                      <strong className="filter-label">Recruiting and Managing Volunteers<div className="accordion__arrow" role="presentation" /></strong>
			                    </AccordionItemTitle>
			                    <AccordionItemBody>
			                    <p className="bold">Recruitment</p>
			                    <p>Each unit is responsible for securing volunteers for its respective events.</p>
			                    <ul>
														<li>The chair is responsible for general volunteers (setup and teardown, key event, lunch runs, etc.).</li>
														<li>The chair sends out "Call for Volunteer" notices to students, faculty and staff.</li>
													</ul>
													<hr />

													<p className="bold">Delegation</p>
			                    <ul>
														<li>Chair drafts job descriptions for volunteers and lets them select which jobs they want.</li>
														<li>Chair sends email to all units requesting their volunteer T-shirt and lunch ticket orders.</li>
													</ul>
													<p><b>Tip:</b> Send initial email three months out and again two or three weeks out from event.</p>
													<hr />

													<p className="bold">Assignments</p>
			                    <ul>
														<li>Runners pick-up lunches for group of volunteers who aren't able to leave their posts.</li>
														<li>Hosts staff buildings equipped with maps, schedules, etc. to help visitors as needed.</li>
														<li>Sponsor hosts and all-day helpers assist corporate sponsors and their activities.</li>
														<li>All participate in general setup and teardown of main events as needed</li>
														<li>Periodically check facilities, trash receptacles and restrooms throughout the day.</li>
													</ul>
													<hr />

													<p className="bold">Recognition</p>
			                    <ul>
														<li>Write personal thank-you letters to staff volunteers and copy their supervisors. Tip: Letters can help position someone for staff service awards.</li>
													</ul>

			                    </AccordionItemBody>
			                  </AccordionItem>
			                </Accordion>
			                
			              </Col>
			            </Row>
			          </TabPane>


			        </TabContent>
	    		</div>
	    	</div>
	    </div>
	  </Layout>
    );
  }
}
