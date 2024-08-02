import StaffCard from "./StaffCard";
import christyMcminn from "../../assets/christy-mcminn-3.jpg";
import cheyenneStroope from "../../assets/cheyenne-stroope-2.jpg";
import treyTaylor from "../../assets/trey-taylor-3.jpg";
import chrisBramlett from "../../assets/chris-bramlett-2.jpg";
import caylaLimas from "../../assets/cayla-limas-2.jpg";
import dptGroup from "../../assets/dpt-group-2.jpg";
import banner from "../../assets/about-banner.jpg";
import summerSides from "../../assets/summer-sides.jpg";
import maryHolt from "../../assets/mary-holt.jpg";
import emmyRodroguez from "../../assets/emmy-rodriguez.jpg";
import darinDeaton from "../../assets/darin-deaton.jpg";
import kyleTanner from "../../assets/kyle-tanner.jpg";
import jessicaViotta from "../../assets/jessica-viotta.jpg";
import daynaMasters from "../../assets/dayna-masters.jpg";
import morganRussell from "../../assets/morgan-russell.jpg";
import maryDeleon from "../../assets/mary-deleon.jpg";
import shalieJones from "../../assets/shalie-jones.jpg";
import chrisLeisinger from "../../assets/chris-leisinger.jpg";
import isabellaMartinez from "../../assets/isabella-martinez.jpg";
import glenRoseGroup from "../../assets/glen-rose-2.jpg";
import stephenvilleGroup from "../../assets/stephenville-2.jpg";
import lubbockGroup from "../../assets/lubbock-2.jpg";
import "./About.css";
import { useState } from "react";

export const staff = {
  glenRose: [
    {
      name: "Summer Sides",
      credentials: "PT, DPT, Cert. DN",
      title: "Clinic Manager—Doctor of Physical Therapy",
      photo: summerSides,
      degrees: [
        "Bachelor of Science, Exercises and Sports Studies - Tarleton State University",
        "Master of Science, Kinesiology — The University of Texas at Tyler",
        "Doctor of Physical Therapy — University of Mary Hardin Baylor",
      ],
      bioParagraphs: [
        "Dr. Sides has been in practice as a Physical Therapist for 4 years with experience in the outpatient orthopedics setting.  She has ten years of experience in Health and Wellness as an Exercise Physiologist for the Austin, Texas Fire Department.  She focuses on functional movements and strives to build relationships with her patients to help them obtain their goals.  Summer’s professional interests include sports rehab, functional strength and conditioning, balance therapy, dry needling, pelvic floor therapy, and orthopedic manual therapy.  You will find Summer outside in her free time. She enjoys spending time with her family and two dogs, riding horses, gardening, and exercising.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Mary Holt",
      credentials: null,
      title: "Front Office Coordinator",
      photo: maryHolt,
      degrees: [],
      bioParagraphs: [
        "Mary was born and raised in Fort Worth, Texas. She graduated from Castleberry High School in 1991 where she pursued her love of music and sang in their Acapella Choir. She lives in Cleburne and has two grown children and four adorable grandchildren. Mary loves to volunteer doing service projects for several organizations in her community. She is currently attending Penn Foster to obtain her Certified Medical Administrative Assistant Certification and will go on to finish her Associates Degree in Medical Office Administration. She is passionate about helping people and has over 20 years of customer relations experience. She loves to make people smile and help make them feel comfortable and welcome in any and every situation.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Emmy Rodroguez",
      credentials: null,
      title: "Physical Therapist Technician",
      photo: emmyRodroguez,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
  ],
  stephenville: [
    {
      name: "Trey Taylor",
      credentials: "PT, DPT, Cert. DN",
      title: "Vice President—Partner—Clinic Manager",
      photo: treyTaylor,
      degrees: [
        "Bachelor of Science in Kinesiology - Tarleton State University",
        "Doctor of Physical Therapy — University of North Texas, Health Science Center",
        "Certified in Dry Needling",
      ],
      bioParagraphs: [
        "Dr. Taylor DPT is born and raised in Stephenville where he graduated from Stephenville High School in 2008. Trey manages our Stephenville and has operational oversight on our other locations. Trey has several years of experience in various orthopedic settings and is committed to helping his patients reach their maximum potential. Trey resides in Stephenville with his wife, Shelby Taylor, and their four kids Dru, Peyton, Jase and Austin.",
      ],
      areasOfInterest: [
        "Sports rehab",
        "Strength/conditioning wellness programs",
        "Orthopedic manual therapy",
        "Dry needling",
        "Pain management",
        "Vestibular, balance therapy including vertigo",
      ],
    },
    {
      name: "Darin Deaton",
      credentials: "PT, DPT, OCS, SSC, Cert. DN, CAE",
      title: "President—Partner",
      photo: darinDeaton,
      degrees: [
        "Bachelors/Master of Science Physical Therapy - Texas Woman's University",
        "Doctor of Science Physical Therapy - Boston University Sargent College of Health & Rehabilitation Sciences",
        "APTA Board Certified Orthopedic Specialist",
        "Starting Strength Coach",
        "Certified in Dry Needling",
        "Certified Associate Ergonomist",
      ],
      bioParagraphs: [
        "Dr. Deaton is the president and a partner of DPT. He has been in practice for 34 years with operational business management and clinical experience. He has founded and built several healthcare businesses serving small and large markets. He has a practical approach to care that is built on experience, evidence, the patient's desired outcome and value. He has a deep understanding of human movement, capacity and performance, but he focuses on common sense impactful interventions making the complex, simple. He enjoys ranching, cow horses, barbell training, bow hunting and operates a beef cattle operation with his wife Michele of 34 years. He has three grown children and several grandkids.",
      ],
      areasOfInterest: [
        "Healthcare business development & management",
        "Orthopedics, Sports medicine, Barbell rehabilitation, Sports Performance programs",
        "Medical Exercise therapy programs",
        "Manual therapy, Dry needling",
      ],
    },
    {
      name: "Kyle Tanner",
      credentials: "PT, DPT, Cert. DN",
      title: "Doctor of Physical Therapy",
      photo: kyleTanner,
      degrees: [
        "Bachelor of Science in Kinesiology - Tarleton State University",
        "Doctor of Physical Therapy - University of Mary Hardin Baylor",
        "Certified in Dry Needling",
      ],
      bioParagraphs: [
        "Dr. Tanner has been practicing since 2018 and has experience treating a wide variety of diagnoses in both the outpatient and inpatient settings. His treatment approaches are based on his clinical experiences and evidence-based practice models. When he is not treating in the clinic, he enjoys spending time with his wife and 3 boys; he also enjoys any kind of activities outdoors including golf, fishing, yardwork etc.",
      ],
      areasOfInterest: [
        "Orthopedics and Sports Medicine",
        "Medical Therapy Exercise Programs",
        "Manual Therapy",
        "Dry Needling",
      ],
    },
    {
      name: "Cayla Limas",
      credentials: "PTA",
      title: "Physical Therapy Assistant",
      photo: caylaLimas,
      degrees: [],
      bioParagraphs: [
        "Cayla has 12 years of experience as a Physical Therapy Assistant, with 9 of those years in an outpatient setting. She earned her BS in Exercise Sports Science from Texas Tech University in 2009, and an Associate's in Applied Science - Physical Therapist Assistant from Amarillo College in 2012. Cayla has worked in a variety of physical therapy settings ranging from the east coast, west Texas, and then back home to north Texas. Born in Fort Worth, she spent most of her early years locally in Santo, Texas. Cayla knew before graduating high school that she wanted to pursue a career in physical therapy. While competing in softball she sustained an injury which drew her to the physical therapy profession. She enjoys working with patients in a variety of settings, striving to develop a relationship with each of her patients and developing treatment plans specific to the needs of each. Cayla is blessed to spend her life with her husband Abel and two children, Amelia and Adrian. They love spending time on their property fishing, riding horses, and enjoying beautiful sunsets.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Jessica Viotta",
      credentials: "PTA",
      title: "Physical Therapy Assistant",
      photo: jessicaViotta,
      degrees: [],
      bioParagraphs: [
        "Jessica is a native of Stephenville, Texas where she completed her high school education in 2008. She then attended Tarleton State University and in May of 2012 she graduated with a Bachelor of Science in Biology.  Subsequently, she was accepted into the Physical Therapist Assistant Program at Tarrant County College and became licensed in 2014. Upon graduating, Jessica was employed in the home health field, where she was a Certified Preceptor and held that position until March of 2022. In 2020, she received the award for Preceptor of the Year.  After developing a passion for women and women’s health, Jessica became a Certified Doula and Certified American Heart Association CPR Instructor.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Dayna Masters",
      credentials: null,
      title: "",
      photo: daynaMasters,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
    {
      name: "Christy McMinn",
      credentials: "Administrator",
      title: "Supervisor—Front Office Coordinator",
      photo: christyMcminn,
      degrees: [],
      bioParagraphs: [
        "Christy was born in Fairfax, Virginia. She was raised in a military family, which meant she moved a lot when she was young. Her family eventually moved to Texas. She attended Remington College, becoming a Medical Assistant in 2002. In 2015, she graduated from the College of Health Care Professions with her Associate of Applied Science Degree in Healthcare Management. She has several years of medical office experience and will work hard to ensure all your concerns are addressed and needs are met. She resides in Stephenville, Texas with her husband, children, and grandchildren.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Chris Bramlett",
      credentials: null,
      title: "Physical Therapy Technician—Supervisor",
      photo: chrisBramlett,
      degrees: [],
      bioParagraphs: [
        "Chris is an experienced Physical Therapy Technician with 17 years of working knowledge. Born and raised here in Stephenville, he graduated from Stephenville High School in 1995. He then attended Ranger College and received his associate degree. Chris enjoys working with people and is very involved in the sports community. He never misses a Stephenville football game. He enjoys teaching and working with young athletes in a 7-on-7 football league, track and field, and basketball for Stephenville High School and Henderson Junior High. Chris resides in Stephenville today and enjoys fishing, running, and hanging out with family and friends.",
      ],
      areasOfInterest: [],
    },
    {
      name: "Morgan Russell",
      credentials: null,
      title: "Physical Therapy Technician",
      photo: morganRussell,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
    {
      name: "Mary DeLeon",
      credentials: null,
      title: "Physical Therapy Technician",
      photo: maryDeleon,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
    {
      name: "Shalie Jones",
      credentials: null,
      title: "Physical Therapy Technician",
      photo: shalieJones,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
  ],
  lubbock: [
    {
      name: "Chris Leisinger",
      credentials: "PT, DPT, LAT, CSCS, Cert. DN",
      title:
        "Clinic Manager—Doctor of Physical Therapy—Licensed Athletic Trainer",
      photo: chrisLeisinger,
      degrees: [
        "Bachelor of Science — Briar Cliff University",
        "Masters of Athletic Training — Texas Tech University Health Science Center",
        "Doctor of Physical Therapy — University of St. Augustine, Austin Campus",
      ],
      bioParagraphs: [
        "Chris is originally from Iowa where he started his educational career and was a college wrestler. Chris practiced for 2 years in an outpatient clinic in Levelland Texas before transitioning to the clinic manager of DPT of Lubbock. Chris also works Home Health and helps with a couple of SNFs in Lubbock on nights and weekends. In his free time, Chris enjoys spending time with his family, working out and outdoor activities. ",
      ],
      areasOfInterest: [],
    },
    {
      name: "Isabella Martinez",
      credentials: null,
      title: "Physical Therapy Technician—Front Office Coordinator",
      photo: isabellaMartinez,
      degrees: [],
      bioParagraphs: [],
      areasOfInterest: [],
    },
  ],
};

export const pathify = (name) => `/${name.toLowerCase().replace(" ", "-")}`;

const About = () => {
  const [isOpen, setIsOpen] = useState({
    glenRose: false,
    stephenville: false,
    lubbock: false,
  });

  return (
    <div className="About">
      <div className="About-content">
        <div
          className="About-photo"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="About-image-overlay-left" />
        </div>
        <div className="About-text">
          <h1 className="About-title">ABOUT DPT</h1>
          <p className="About-text-content">
            Welcome to DPT Physical Therapy & Performance, a rehabilitation
            group! Let our Doctors of Physical Therapy design a specialized
            treatment plan tailored to your personal care. Our staff is
            dedicated to patient focused service, where we don't just meet, but
            strive to exceed your expectations. The success of our patients is
            how we measure the success of our group! Let our Doctors of PT "get
            you back to LIFE!"
          </p>
          <h3 className="About-subtitle">OUR CORE VALUES:</h3>
          <ul className="About-ul About-text-content">
            <li className="About-li">
              Compassion — All people deserve to receive care in a loving and
              accepting environment.
            </li>
            <li className="About-li">
              Excellence — All interventions are based on the value of the
              patient, experience of the staff, and research/technology.
            </li>
            <li className="About-li">
              Integrity — All interventions are provided in an honest and
              "always do the right thing" setting.
            </li>
            <li className="About-li">
              Diligence — All interactions are built on hard work and a strong
              work ethic.
            </li>
          </ul>
        </div>
      </div>
      <div className="About-staff">
        <h1 className="About-title">MEET OUR STAFF</h1>
        <div
          className="About-staff-group-photo glenRose"
          style={{
            backgroundImage: `url(${glenRoseGroup})`,
            backgroundPositionY: "70%",
          }}
        />
        <h2 className="About-subtitle">GLEN ROSE</h2>
        <div className="About-staff-grid">
          {staff.glenRose.map((member, i) => (
            <StaffCard
              key={i}
              name={member.name}
              credentials={member.credentials}
              title={member.title}
              photo={member.photo}
              degrees={member.degrees}
              bioParagraphs={member.bioParagraphs}
              areasOfInterest={member.areasOfInterest}
            />
          ))}
        </div>
        <div
          className="About-staff-group-photo stephenville"
          style={{
            backgroundImage: `url(${stephenvilleGroup})`,
            backgroundPositionY: "60%",
          }}
        />
        <h2 className="About-subtitle">STEPHENVILLE</h2>
        <div className="About-staff-grid">
          {staff.stephenville.map((member, i) => (
            <StaffCard
              key={i}
              name={member.name}
              credentials={member.credentials}
              title={member.title}
              photo={member.photo}
              degrees={member.degrees}
              bioParagraphs={member.bioParagraphs}
              areasOfInterest={member.areasOfInterest}
            />
          ))}
        </div>
        <div
          className="About-staff-group-photo"
          style={{
            backgroundImage: `url(${lubbockGroup})`,
            backgroundPositionY: "20%",
          }}
        />
        <h2 className="About-subtitle">LUBBOCK</h2>
        <div className="About-staff-grid lubbock">
          {staff.lubbock.map((member, i) => (
            <StaffCard
              key={i}
              name={member.name}
              credentials={member.credentials}
              title={member.title}
              photo={member.photo}
              degrees={member.degrees}
              bioParagraphs={member.bioParagraphs}
              areasOfInterest={member.areasOfInterest}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
