import { storiesOf } from "@storybook/react";
import * as React from "react";

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

import PastHackathonsGallery from "../components/PastHackathonsGallery";

storiesOf("Past Hackathons Gallery", module)
    .add("HackMerced I", () => (
        <PastHackathonsGallery iteration={null} images={[CHECKIN, HMFOOD, MACHINE, TEACHING, OLDTEAM, TUTOR]} />
    ))
    .add("HackMerced II", () => (
        <PastHackathonsGallery
            iteration={"II"}
            images={[SPEAKERII, HACKERSII, COLLABORATION, CHECKINGINII, MLHII, SPONSORSII]}
        />
    ))
    .add("HackMerced III", () => (
        <PastHackathonsGallery
            iteration={"III"}
            images={[MLHCUPSTACK, WINNERSIII, AWARDSIII, PRIZES, JUDGESIII, REDBULL]}
        />
    ))
    .add("HackMerced IV", () => (
        <PastHackathonsGallery iteration={"IV"} images={[HACKING, PRESENTER, PRESENTATIONS, HACKIV, JUDGES, AWARDS]} />
    ))
    .add("HackMerced V", () => (
        <PastHackathonsGallery
            iteration={"V"}
            images={[HACKERS, HMFOODV, CITRIS, SPONSORSV, HEALTHWINNER, SHUBAWARD]}
        />
    ));
