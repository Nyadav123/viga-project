import "./../Css/Exam.css";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import rect from "./../Images/pic2.png";
const Exam = () => {
  return (
    <>
      <div className="e-time">01:33:33</div>
      <div className="t-c">
        <div className="t-1">
          |<div className="t-2">\</div>
        </div>
      </div>
      <div className="e-que"> Question 1</div>
      <div className="e-box">
        <div className="e-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit in id
          diam tortor. Volutpat ipsum accumsan ut euismod pulvinar ut placerat
          gravida. Dolor velit sed non in semper. Enim etiam sem nunc fermentum
          sollicitudin tellus. Sagittis cum nec justo leo semper ut
          sollicitudin. Gravida pellentesque dis.
        </div>
        <div className="e-img">
          <img src={rect} />
        </div>
        <div className="opt-1">
          <div className="e1"></div>
          <div className="txt">Lorem ipsum dolor</div>
        </div>
        <div className="opt-2">
          <div className="e-cir2"></div>
          <div className="txt">Lorem ipsum dolor</div>
        </div>
        <div className="opt-3">
          <div className="e-cir2"></div>
          <div className="txt">Lorem ipsum dolor</div>
        </div>
        <div className="opt-4">
          <div className="e-cir2"></div>
          <div className="txt">Lorem ipsum dolor</div>
        </div>
      </div>
      <Button className="e-btn1">
        <div className="e-b-t1">Exit</div>
      </Button>
      <Button className="e-btn2">
        <div className="e-b-t2">Submit</div>
      </Button>
      <Button className="e-b-1">1</Button>
      <Button className="e-b-2">1</Button>
      <Button className="e-b-3">1</Button> 
      <Button className="e-b-4">1</Button>
       <Button className="e-b-5">1</Button>
      <Button className="e-b-1-1">1</Button>
      <Button className="e-b-1-2">1</Button>
      <Button className="e-b-1-3">1</Button> 
      <Button className="e-b-1-4">1</Button>
       <Button className="e-b-1-5">1</Button>
      <Button className="e-b-2-1">1</Button>
      <Button className="e-b-2-2">1</Button>
      <Button className="e-b-2-3">1</Button> 
      <Button className="e-b-2-4">1</Button>
       <Button className="e-b-2-5">1</Button>
       <Button className="e-b-3-1">1</Button>
      <Button className="e-b-3-2">1</Button>
      <Button className="e-b-3-3">1</Button> 
      <Button className="e-b-3-4">1</Button>
       <Button className="e-b-3-5">1</Button>
       <div className="extra">&#60; &nbsp; &nbsp;1&nbsp;<div className="ext">2&nbsp;&nbsp;3</div><div className="ar-e">&#62;</div></div>
      <Button className="e-btn3">
        <div className="e-b-t3">&#60;&nbsp;Previous</div>
      </Button>
      <Button className="e-btn4">
        <div className="e-b-t4">Next &nbsp;&#62;</div>
      </Button>
      <div className="alert1">
        <div className="a-i">
          Please adjust your camera<p>12:30 pm</p>
        </div>
      </div>
      <div className="alert2">
        <div className="h1">
          <div className="sym1">
            !{" "}
            <div className="wrn-1">
              Warning 1
              <p>Warning 1</p>
              <div className="w1-crs1">|</div>
              <div className="w1-crs2">|</div>
            </div>
          </div>
        </div>
      </div>
      <div className="alert3">
        <div className="h2">
          <div className="sym2">
            !
            <div className="wrn-2">
              Warning 2
              <p>Warning 2</p>
              <div className="w1-crs1">|</div>
              <div className="w1-crs2">|</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Exam;
