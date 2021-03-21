import { storiesOf } from "@storybook/react";
import * as React from "react";

// HackMerced I
import HACKMERCED_I_CHECK_IN from "../../assets/images/checkin.jpg";
import HACKMERCED_I_FOOD from "../../assets/images/hmfood.jpg";
import HACKMERCED_I_MACHINE from "../../assets/images/machine.jpg";
import HACKMERCED_I_TEACHING from "../../assets/images/teaching.jpg";
import HACKMERCED_I_OLD_TEAM from "../../assets/images/team-2016.jpg";
import HACKMERCED_I_TUTOR from "../../assets/images/tutor.jpg";

// HackMerced II
import HACKMERCED_II_SPEAKER from "../../assets/images/speaker-ii.jpg";
import HACKMERCED_II_HACKERS from "../../assets/images/hackers-ii.jpg";
import HACKMERCED_II_COLLABORATION from "../../assets/images/collaboration.jpg";
import HACKMERCED_II_CHECK_IN from "../../assets/images/checking-in-ii.jpg";
import HACKMERCED_II_MLH from "../../assets/images/mlh-ii.jpg";
import HACKMERCED_II_SPONSORS from "../../assets/images/sponsors-ii.jpg";

// HackMerced III
import HACKMERCED_III_MLH_CUP_STACK from "../../assets/images/mlh-cupstack.jpg";
import HACKMERCED_III_WINNERS from "../../assets/images/winners-iii.jpg";
import HACKMERCED_III_AWARDS from "../../assets/images/awards-iii.jpg";
import HACKMERCED_III_PRIZES from "../../assets/images/prizes-iii.jpg";
import HACKMERCED_III_JUDGES from "../../assets/images/judges-iii.jpg";
import HACKMERCED_III_RED_BULL from "../../assets/images/redbull.jpg";

// HackMerced IV
import HACKMERCED_IV_HACKING from "../../assets/images/hackers2.jpg";
import HACKMERCED_IV_PRESENTER from "../../assets/images/presenter.jpg";
import HACKMERCED_IV_PRESENTATIONS from "../../assets/images/presentations.jpg";
import HACKMERCED_IV_HACKERS from "../../assets/images/hackiv.jpg";
import HACKMERCED_IV_JUDGES from "../../assets/images/judges.jpg";
import HACKMERCED_IV_AWARDS from "../../assets/images/awards2.jpg";

// HackMerced V
import HACKMERCED_V_HACKERS from "../../assets/images/hackers.jpg";
import HACKMERCED_V_FOOD from "../../assets/images/hmfood-v.jpg";
import HACKMERCED_V_CITRIS from "../../assets/images/citris.jpg";
import HACKMERCED_V_SPONSORS from "../../assets/images/sponsors-v.jpg";
import HACKMERCED_V_HEALTH_WINNER from "../../assets/images/health2.jpg";
import HACKMERCED_V_SHUB_AWARD from "../../assets/images/shub-award.jpg";

// HackMerced VI
import HACKMERCED_VI_CLOSING_CEREMONY from "../../assets/images/closing-ceremony.png";
import HACKMERCED_VI_OPENING_CEREMONY from "../../assets/images/openingceremony.png";
import HACKMERCED_VI_VIRTUAL_TEAM from "../../assets/images/team-members-virtual.png";
import HACKMERCED_VI_BOB_ROSS from "../../assets/images/bob-ross-painting.jpg";
import HACKMERCED_VI_REACT_NATIVE_WORKSHOP from "../../assets/images/react-native-workshop.png";
import HACKMERCED_VI_VIRTUAL_STICKERS from "../../assets/images/virtual-stickers.jpg";

import PastHackathonsGallery from "../components/PastHackathonsGallery";

storiesOf("Past Hackathons Gallery", module)
    .add("HackMerced I", () => (
        <PastHackathonsGallery
            iteration={null}
            images={[
                HACKMERCED_I_CHECK_IN,
                HACKMERCED_I_FOOD,
                HACKMERCED_I_MACHINE,
                HACKMERCED_I_TEACHING,
                HACKMERCED_I_OLD_TEAM,
                HACKMERCED_I_TUTOR,
            ]}
        />
    ))
    .add("HackMerced II", () => (
        <PastHackathonsGallery
            iteration={"II"}
            images={[
                HACKMERCED_II_SPEAKER,
                HACKMERCED_II_HACKERS,
                HACKMERCED_II_COLLABORATION,
                HACKMERCED_II_CHECK_IN,
                HACKMERCED_II_MLH,
                HACKMERCED_II_SPONSORS,
            ]}
        />
    ))
    .add("HackMerced III", () => (
        <PastHackathonsGallery
            iteration={"III"}
            images={[
                HACKMERCED_III_MLH_CUP_STACK,
                HACKMERCED_III_WINNERS,
                HACKMERCED_III_AWARDS,
                HACKMERCED_III_PRIZES,
                HACKMERCED_III_JUDGES,
                HACKMERCED_III_RED_BULL,
            ]}
        />
    ))
    .add("HackMerced IV", () => (
        <PastHackathonsGallery
            iteration={"IV"}
            images={[
                HACKMERCED_IV_HACKING,
                HACKMERCED_IV_PRESENTER,
                HACKMERCED_IV_PRESENTATIONS,
                HACKMERCED_IV_HACKERS,
                HACKMERCED_IV_JUDGES,
                HACKMERCED_IV_AWARDS,
            ]}
        />
    ))
    .add("HackMerced V", () => (
        <PastHackathonsGallery
            iteration={"V"}
            images={[
                HACKMERCED_V_HACKERS,
                HACKMERCED_V_FOOD,
                HACKMERCED_V_CITRIS,
                HACKMERCED_V_SPONSORS,
                HACKMERCED_V_HEALTH_WINNER,
                HACKMERCED_V_SHUB_AWARD,
            ]}
        />
    ))
    .add("HackMerced VI", () => (
        <PastHackathonsGallery
            iteration={"VI"}
            images={[
                HACKMERCED_VI_OPENING_CEREMONY,
                HACKMERCED_VI_VIRTUAL_TEAM,
                HACKMERCED_VI_BOB_ROSS,
                HACKMERCED_VI_VIRTUAL_STICKERS,
                HACKMERCED_VI_REACT_NATIVE_WORKSHOP,
                HACKMERCED_VI_CLOSING_CEREMONY,
            ]}
        />
    ));
