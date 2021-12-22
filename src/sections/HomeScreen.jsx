import Conversation from "../components/Conversation";
import NavBar from "../components/Navbar";
import HeroSection from "./Herosection";
import Mainstack from "./mainstack";
import marv from "../public/assets/images/marvelous.png";
import Heading from "../components/heading";
import Lady from "../public/assets/images/lady.png";
import Man from "../public/assets/images/man.png";
import Woman from "../public/assets/images/woman.png";
import ShareSection from "./ShareSection";
import MediaSection from "./MediaSection";
import PaymentSection from "./PaymentSection";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Mainstack />
      <Conversation
        color="linear-gradient(180deg, #22252d 0%, #0a0c10 100%)"
        first={marv}
        second={marv}
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim"
      />
      <Heading
        subheading="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam"
        heading="Conversations designed for "
        highlighted="people, not bots."
      />
      <Conversation
        color="linear-gradient(180deg, #C91C5A 0%, #920034 100%)"
        first={Lady}
        second={Man}
        third={Woman}
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim"
      />

      <ShareSection />
      <MediaSection />
      <PaymentSection />
    </div>
  );
};

export default HomeScreen;
