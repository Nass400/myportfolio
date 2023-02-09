import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
       <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Olacube - (2017 - Present)"
            result="Tunis, TUNISIA"
            des=<ul>
                  <li>Worked as a Java Developer in a team to develop an ERP system for
a maintenance company.</li>
                  <li>Collaborated with the team to implement a responsive and user-
friendly interface using ReactJS.</li>
<li>Utilized Spring Boot framework to develop the back-end and
ReactJS for the front-end of the application.</li>
<br></br>
<li><strong>Keywords: ReactJs - Java - SpringBoot - MySQL- Hibernate - JPA -
Jira - Cypress - Kafka - Microservices - Docker</strong></li>
                </ul>
          />
          <ResumeCard
            title="SOFTWARE ENGINEER - Freelance"
            subTitle="ODAS SERVICES - (Dec 2021 - Aug 2022)"
            result="TUNIS, TUNISIA"
            des=<ul>
                  <li>Designing Microservice Architecture Projects.</li>
                  <li>Desiging Databases Architectures.</li>
                  <li>Building APIs using ExpressJS & NestJs along with SQL & NoSQL databases.</li>
                  <li>Working with a Test Driven Development pattern assuring the quality and
optimization of Code.</li>
<br></br>
  <li><strong>Keywords: Microservices - Nodejs - Docker Compose - Mongoose - Redis
PostgreSQL- RabbitMQ - REST API - SAGA paterns - Swagger - Mocha & Chai</strong></li>

                </ul>
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des=""
          /> */}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
