import { useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./../Css/Home.css";
import on from "./../Images/n1.png";
import off from "./../Images/n2.png";
import person from "./../Images/person.png";
const Home = () => {
  const accordionData = {
    title1: "Neural Networks  and Fuzzy Control",
    name: "CSE3013",
    name1: "ESE1029",
    exam1: "CAT1",
    exam2: "CAT2",
    time1: "22nd December 2020 * 9:00am-10am",
    time2: "22nd December 2020 * 9:00am-10am",
    time3: "22nd December 2020 * 9:00am-10am",
    exam3: "Lab FAT",
    title2: "IOT Systems Architecture",
  };
  const { title1, title2, name, exam1, exam2, exam3, name1 } = accordionData;
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  return (
    <>
      <Card className="h-head">My Classes</Card>
      <div className="accordion-item1">
        <div
          className="accordion-title"
          onClick={() => setIsActive1(!isActive1)}
        >
          <div className="sign1">
            {title1}
            <br />
            <p>{name}</p>
          </div>
          <div className="down">
            {isActive1 ? (
              <FaAngleUp className="sign" />
            ) : (
              <FaAngleDown className="sign" />
            )}
          </div>
        </div>
      </div>
      <Card className="accordion-item2">
        <div
          className="accordion-title"
          onClick={() => setIsActive2(!isActive2)}
        >
          <div className="sign1">
            {title2}
            <br />
            <p>{name1}</p>
          </div>
          <div className="down">
            {isActive2 ? (
              <FaAngleUp className="sign" />
            ) : (
              <FaAngleDown className="sign" />
            )}
          </div>

          {isActive2 && (
            <Accordion className="accordion-contents" eventKey="0">
              <Card.Body className="h-body">
                {exam1}
                <div className="time">
                  22th Dec 2020&nbsp; &nbsp;*&nbsp; &nbsp;9:00am - 10am&nbsp;{" "}
                  <img src={off} alt="" />{" "}
                </div>
                <Link className="btn1">Completed</Link>
              </Card.Body>
              <Card.Body className="h-body">
                {exam2}
                <div className="time">
                  22nd Jan 2020&nbsp; &nbsp;*&nbsp; &nbsp;9:00am - 10am &nbsp;
                  &nbsp;
                  <img src={on} alt="" />
                </div>
                <Link to="/checking" className="btn2">
                  Join Exam
                </Link>
              </Card.Body>
              <Card.Body className="h-body">
                {exam3}
                <div className="time">
                  22nd Mar 2020&nbsp; &nbsp;*&nbsp; &nbsp;9:00am - 10am &nbsp;
                  <img src={on} alt="" />
                </div>
                <Link className="btn3">Yet to Start</Link>
              </Card.Body>
            </Accordion>
          )}
        </div>
      </Card>
      <div className="exam">Take Demo Exam</div>
      <br />
      <div className="personal">
        Samuel Doe <br />
        <p>I8BIS1241</p>
      </div>
      <Link to="/settings">
        <img className="h-pic" src={person}></img>
      </Link>
    </>
  );
};
export default Home;
