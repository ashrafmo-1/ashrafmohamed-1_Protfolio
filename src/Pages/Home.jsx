import Projects from "./Projects";
import Skills from "./Skills";
import BioAndInfo from "../components/home/Bio&information";
import InfoAndSocila from "../components/home/Info&social";
import WorkInfo from "../components/home/WorkInfo";

export default function Home() {
  return (
      <>
    <div className="containerFromCOmp" style={{ minHeight: "calc(100vh)" }}>
      <div className="homeContent">
        {/* Bio And Information */}
          <BioAndInfo />
        {/* Information and social */}
          <InfoAndSocila />
        {/* information work */}
          <WorkInfo />
      </div>
    </div>
        <Skills />
        <Projects />
      </>
  );
}
