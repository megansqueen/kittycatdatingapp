import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function LearnMore() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Our Mission">
        <p>Our Mission: To provide every cat wiht the experience of true love and companionship. Whether you're seeking a long term relationship or just a short fling because you're in heat, we believe every cat deserved to snuggle up with someone they can truly connect with</p>
      </Tab>
      <Tab eventKey="profile" title="Founders">
        <p>Single Kitties Ready to Mingle was founded by Clarice - a young cat who struggled finding other cats to connect with within wandering distance of her human's home. Since the launch of this amazing dating platform, thousands of deserving kitties have found love</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Clarice doesn't have a phone or email, but if you've like to offer feedback you can find her occasionally wandering down 20th st in Portland OR. She's the white fluffy one.</p>
      </Tab>
    </Tabs>
  );
}

export default LearnMore;