import React from 'react';
import "./Teams.css";
import Cards from './Cards';

// will contain all the information of the team members in one var and pass to cards
// Format is as : image, name, department, email, socials
const teamMembersInfo=[["Rohit Pati", "Management", "rohit.075bme031@tcioe.edu.np" ,"https://www.linkedin.com/in/rohit_pati"],
                      ["Abhishek Kandel", "Management","email-field"],
                      ["Bibek Sharma", "Communication", "sharmabibek880@gmail.com" ,"https://www.linkedin.com/in/bibek-sharma-560a55239"],
                      ["Aashish Pant", "Communication", "aashishpnt@gmail.com" ,"https://www.linkedin.com/in/aashish-pant-96b305186/"],
                      ["Birat Poudel", "Communication", "poudel.birat25@gmail.com" ,"https://www.linkedin.com/in/birat-poudel-6562ba16b/"],
                      ["Roshan Thapa", "Communication", "thaparoshan3722@gmail.com" ,"https://www.linkedin.com/in/roshan-thapa-294498251"],
                      ["Laxman Bhandari", "Communication","email-field"],		
                      ["Prashna Poudel", "Communication", "prashnapoudel15@gmail.com" ,"https://www.linkedin.com/in/prashna-poudel-69a811242/"],
                      ["Rituram Ojha", "Electronics", "bikashojha904@gmail.com" ,"https://www.linkedin.com/in/rituramojha/"],
                      ["Ayush Raj Shah", "Electronics", "ayush.078bme006@tcioe.edu.np"],	
                      ["Joseph Thapa Magar", "Electronics", "josephthapa911@gmail.com"],	
                      ["Bishal Gautam", "Chassis", "gtm.bishal57@gmail.com" ,"https://www.linkedin.com/in/bishal-gautam-88b633226/"],
                      ["Divyan Acharya", "Chassis", "divyanacharya777@gmail.com"],	
                      ["Ragiv Dhakal", "Chassis", "ragivdhakal@gmail.com" ,"https://www.linkedin.com/in/ragiv-dhakal-983051243/"],
                      ["Subash Bhujel", "Vehicle Dynamics", "ronaldliomes@gmail.com"],
                      ["Bivek Raymajhi", "Vehicle Dynamics", "raymajhibivek2059@gmail.com" ,"https://www.linkedin.com/in/bivek-raymajhi-b9793a193/"],
                      ["Elish Khadka", "Vehicle Dynamics", "alishkdk2000@gmail.com"],	
                      ["Bikalpa Poudel", "Vehicle Dynamics", "poudelbikalpa21@gmail.com" ,"https://www.linkedin.com/in/bikalpa-poudel-478578269/"],
                      ["Nischal Karki", "Vehicle Dynamics", "karkinischal993@gmail.com"],	
                      ["Sharad Timilsina", "Bodywork", "sharadtimilsina3@gmail.com" ,"https://www.linkedin.com/in/sharad-timilsina-388175225"],
                      ["Milan Shrestha", "Bodywork", "ms6297866@gmail.com"],	
                      ["Pukar Khanal", "Bodywork", "pukarkhanal003@gmail.com"],	
                      ["Sharan Shakya", "Motor & Powertrain", "sharanshakya011101101@gmail.com ","https://www.linkedin.com/in/sharan-shakya-8b6469252/"],
                      ["Arun Koirala", "Motor & Powertrain", "arunkoiralak47@gmail.com"],	
                      ["Kristina Bhandari", "Autonomous", "christinabhandari60@gmail.com" ,"https://www.linkedin.com/in/kristina-bhandari-b45147209/"],
                      ["Rajendra Baskota", "Autonomous", "raj.baskota056@gmail.com" ,"https://www.linkedin.com/in/rajendrabaskota"],
                      ["Prabin Bohara", "Autonomous", "prabinbohara10@gmail.com" ,"https://www.linkedin.com/in/prabinbohara10"]
                    ];

function Teams() {
  return (
    <div className="page Team-Members flex-c-se-c">
        <span className="page-title">Our Team Members</span>
        <br />
        <Cards cardObjects={teamMembersInfo} />
    </div>
  )
}

export default Teams