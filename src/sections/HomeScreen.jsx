import Conversation from "../components/Conversation";
import NavBar from "../components/Navbar";
import HeroSection from "./Herosection";
import Mainstack from "./mainstack";
import marv from "../public/assets/images/marvelous.png";
import Heading from "../components/heading";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Mainstack />
      <Conversation
        first={marv}
        second={marv}
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim"
      />
      <Heading
        subheading="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam"
        heading="Conversations designed for "
        highlighted="people, not bots."
      />
    </div>
  );
};

export default HomeScreen;
