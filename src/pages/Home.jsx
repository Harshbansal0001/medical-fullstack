// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Admin Portal</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
        This heading emphasizes trust and reliability
          <HighlightText text={"Your Health, Our Priority"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        Your trusted source for essential medications and healthcare products. Conveniently order online and have your items delivered to your door. Your well-being is our priority
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
           More Info
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Lets Login 
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Discover wellness
                <HighlightText text={""} /> through our comprehensive range of products.
              </div>
            }
            subheading={
              "Our offerings are curated and guided by healthcare professionals dedicated to your well-being"
            }
            ctabtn1={{
              btnText: "Lets Purchase",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
Maa Shamla Medicals - Your Online Medical Store
<head>
<a href="/about">Know about us</a>
<nav> <a href="/medicines">Medicines</a> <a href="/contact">contact us</a> <a href="/about">About Us</a>
</nav>
</body>
</html>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"Purchasing today"} />
              </div>
            }
            subheading={
              "Real medical scenarios from your very first lesson. Our interactive platform ensures you'll be diagnosing."
            }
            ctabtn1={{
              btnText: "Continue Purchase",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Lets purchase",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`Welcome to Maa shamla Medicals;\n Start your journey to better health with us.
      <Shop Now" } />
      <TypeAnimation
        cursor={true}
        sequence={[
          "Get your prescriptions online.",
          2000,
          "Find the right healthcare products for you.",
          2000,
          "Shop securely with confidence.",`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}i
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  SignUp now
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/contact"}>
                Contact US
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
            Equip yourself with the essential expertise .{" "}
              <HighlightText text={"for sought-after roles in the medical field"} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
              In today's medical landscape, expertise transcends mere skills. The modern practitioner defines their own standards.
              </div>
              <CTAButton active={true} linkto={"/Contact"}>
                <div className="">Contact Us</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          {/* <TimelineSection /> */}

          {/* Learning Language Section - Section 3 */}
          {/* <LearningLanguageSection /> */}
        </div>
      </div>

      {/* Section 3 */}
      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
        {/* Become a instructor section */}
        {/* <InstructorSection /> */}

        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1> */}
        {/* <ReviewSlider /> */}
      {/* </div> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
