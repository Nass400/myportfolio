import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
     
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FULLSTACK DEVELOPER"
            subTitle="JUSTECH - (2015 - 2020)"
            result="Tunis, Tunisia"
            des=<ul>
                  <li>Being a part of the Team that worked on the Al-Fikr Project, a portal for the publication of electronic journals and electronic books in a single virtual space.</li>
                  <li>Designing and Developing a workflow management system optimized to
streamline communication between Authors, Editors, and Reviewers
throughout the peer review process solving the issues of numerous biases
from reviewers or editors, detecting Fraud, and improving the classical
peer-reviewing process.</li>
<br></br>
  <li><strong>Keywords: ASP.NET Core MVC - SQL Server - C# - JavaScript - Bootstrap</strong></li>

                </ul>          />
          <ResumeCard
            title="MOBILE DEVELOPER"
            subTitle="ARSII Scientific Research Association and Innovation
in Computer Science - (2010 - 2014)"
            result="Sousse, TUNISIA"
            des=<ul>
                  <li>Building a mobile/desktop application to manage the annual "Family
medicine Conference of Sousse" providing a better organization for
inscriptions, access, workshops, tests, Quizs and Evaluations during the
current pandemic situations.</li>
<br></br>
  <li><strong>Keywords: Mobile Development - Flutter - Firestore - Google Cloud platform - JavaScript -
Docker</strong></li>

                </ul>                />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
