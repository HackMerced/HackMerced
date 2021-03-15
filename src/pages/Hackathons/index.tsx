import React, { FC } from "react";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import PastHackathonsGallery from "../../components/PastHackathonsGallery";
import Successes from "../../components/Successes";

// HackMerced I
import CHECKIN from "../../assets/images/checkin.jpg";
import HMFOOD from "../../assets/images/hmfood.jpg";
import MACHINE from "../../assets/images/machine.jpg";
import TEACHING from "../../assets/images/teaching.jpg";
import OLDTEAM from "../../assets/images/team-2016.jpg";
import TUTOR from "../../assets/images/tutor.jpg";

// HackMerced II
import SPEAKERII from "../../assets/images/speaker-ii.jpg";
import HACKERSII from "../../assets/images/hackers-ii.jpg";
import COLLABORATION from "../../assets/images/collaboration.jpg";
import CHECKINGINII from "../../assets/images/checking-in-ii.jpg";
import MLHII from "../../assets/images/mlh-ii.jpg";
import SPONSORSII from "../../assets/images/sponsors-ii.jpg";

// HackMerced III
import MLHCUPSTACK from "../../assets/images/mlh-cupstack.jpg";
import WINNERSIII from "../../assets/images/winners-iii.jpg";
import AWARDSIII from "../../assets/images/awards-iii.jpg";
import PRIZES from "../../assets/images/prizes-iii.jpg";
import JUDGESIII from "../../assets/images/judges-iii.jpg";
import REDBULL from "../../assets/images/redbull.jpg";

// HackMerced IV
import HACKING from "../../assets/images/hackers2.jpg";
import PRESENTER from "../../assets/images/presenter.jpg";
import PRESENTATIONS from "../../assets/images/presentations.jpg";
import HACKIV from "../../assets/images/hackiv.jpg";
import JUDGES from "../../assets/images/judges.jpg";
import AWARDS from "../../assets/images/awards2.jpg";

// HackMerced V
import HACKERS from "../../assets/images/hackers.jpg";
import HMFOODV from "../../assets/images/hmfood-v.jpg";
import CITRIS from "../../assets/images/citris.jpg";
import SPONSORSV from "../../assets/images/sponsors-v.jpg";
import HEALTHWINNER from "../../assets/images/health2.jpg";
import SHUBAWARD from "../../assets/images/shub-award.jpg";

// HackMerced V
import CLOSINGCEREMONY from "../../assets/images/closing-ceremony.png";
import OPENINGCEREMONY from "../../assets/images/openingceremony.png";
import VIRTUALTEAM from "../../assets/images/team-members-virtual.png";
import BOBROSS from "../../assets/images/bob-ross-painting.jpg";
import REACTWS from "../../assets/images/react-native-workshop.png";
import VIRTUALSTICKERS from "../../assets/images/virtual-stickers.jpg";

const Home: FC = (): JSX.Element => {
    return (
        <main>
            <Navbar />
            <Successes
                iteration={"VI"}
                hoursOfHacking={36}
                numberOfAttendees={400}
                projectsSubmitted={40}
                amountOfPrizes={12}
                numberOfWorkshops={11}
                numberOfSponsors={14}
            />
             <PastHackathonsGallery
                iteration={"VI"}
                images={[OPENINGCEREMONY, VIRTUALTEAM, BOBROSS, VIRTUALSTICKERS, REACTWS, CLOSINGCEREMONY]}
            />
            <Successes
                iteration={"V"}
                hoursOfHacking={36}
                numberOfAttendees={300}
                projectsSubmitted={35}
                amountOfPrizes={16}
                numberOfWorkshops={10}
                numberOfSponsors={20}
            />
            <PastHackathonsGallery
                iteration={"V"}
                images={[HACKERS, HMFOODV, CITRIS, SPONSORSV, HEALTHWINNER, SHUBAWARD]}
            />
            <Successes
                iteration={"IV"}
                hoursOfHacking={36}
                numberOfAttendees={300}
                projectsSubmitted={34}
                amountOfPrizes={5}
                numberOfWorkshops={8}
                numberOfSponsors={13}
            />
            <PastHackathonsGallery
                iteration={"IV"}
                images={[HACKING, PRESENTER, PRESENTATIONS, HACKIV, JUDGES, AWARDS]}
            />
            <Successes
                iteration={"III"}
                hoursOfHacking={36}
                numberOfAttendees={500}
                projectsSubmitted={34}
                amountOfPrizes={2}
                numberOfWorkshops={8}
                numberOfSponsors={7}
            />
            <PastHackathonsGallery
                iteration={"III"}
                images={[MLHCUPSTACK, WINNERSIII, AWARDSIII, PRIZES, JUDGESIII, REDBULL]}
            />
            <Successes
                iteration={"II"}
                hoursOfHacking={36}
                numberOfAttendees={700}
                projectsSubmitted={46}
                amountOfPrizes={7.2}
                numberOfWorkshops={1}
                numberOfSponsors={15}
            />
            <PastHackathonsGallery
                iteration={"II"}
                images={[SPEAKERII, HACKERSII, COLLABORATION, CHECKINGINII, MLHII, SPONSORSII]}
            />
            <Successes
                iteration={""}
                hoursOfHacking={24}
                numberOfAttendees={300}
                projectsSubmitted={16}
                amountOfPrizes={2.7}
                numberOfWorkshops={0}
                numberOfSponsors={7}
            />
            <PastHackathonsGallery iteration={null} images={[CHECKIN, HMFOOD, MACHINE, TEACHING, OLDTEAM, TUTOR]} />
            <Footer />
        </main>
    );
};

export default Home;
