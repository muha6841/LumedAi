import CategoriesBlock from "@/Components/CategoriesBlock/CategoriesBlock.tsx";
import DocumentationSolution from "@/Components/DocumentationSolution/DocumentationSolution";
import Footer from "@/Components/Footer/Footer";
import FutureBlock from "@/Components/FutureBlock/FutureBlock";
import Header from "@/Components/Header/Header";
import SolutionBlock from "@/Components/SolutionBlock/SolutionBlock";
import WebBanner from "@/Components/WebBanner/WebBanner";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  return (
    <div className="wrapper">
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={"B8C605D4-15BD4E9F-9DE91303-BFEAC1B1"}
        scrollingSpeed={500}
        navigation={false}
        lazyLoading
        fitToSection
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <>
                <div
                  style={{ height: "100% !important" }}
                  className="section home"
                >
                  <Header />
                  <WebBanner
                    heading="Enlightenment in  Medical Records"
                    bannerText="Meet Lumed, the future of intelligent health record keeping."
                    bannerDescription="Seamlessly transition and elevate your practice to a new standard of administrative excellence."
                    trialBtn="Professional"
                    freeHoverText="Free Trial"
                    joinHoverText="Join Waitlist"
                    joinBtn="Individual"
                    bannerLines="assets/images/banner-lines.png"
                    bannerDots="assets/images/banner-dots.png"
                    downArrow="assets/images/down-arrow.png"
                  />
                </div>
                <div
                  style={{ height: "100% !important" }}
                  className="section about"
                >
                  <SolutionBlock />
                </div>
                <div
                  style={{ height: "100% !important" }}
                  className="section utility"
                >
                  <CategoriesBlock
                    categoryTitile="A New Standard for Efficiency"
                    categoryHeading="The Power of AI in Healthcare"
                  />
                </div>

                <div className="section">
                  <DocumentationSolution documentationTitle="Interoperable with Popular EHRs" documentationHeading="One-Stop Documentation Solution" documentationImg="assets/images/documentation-img.png" />
                </div>

                <div
                  className="section-email section "
                >
                  <FutureBlock
                    futureArrow="assets/images/future-arrow.png"
                    futureText="Welcome to the future of healthcare, powered by Lumed. Reserve your spot on the waitlist to experience it first."
                  />
                  <Footer
                    footerLogo="assets/images/logo.png"
                    copyRight="©Lumed 2023 All rights reserved."
                  />
                </div>
              </>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
