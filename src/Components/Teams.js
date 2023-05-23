import React from 'react';
import "./Teams.css";
import Cards from './Cards';

// will contain all the information of the team members in one var and pass to cards
// Format is as : image, name, department, email, socials
const teamMembersInfo=[["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Rohit Pati", "Management", "rohit.075bme031@tcioe.edu.np" ,"https://www.linkedin.com/in/rohit_pati"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Abhishek Kandel", "Management","email-field"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Bibek Sharma", "Communication", "sharmabibek880@gmail.com" ,"https://www.linkedin.com/in/bibek-sharma-560a55239"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Aashish Pant", "Communication", "aashishpnt@gmail.com" ,"https://www.linkedin.com/in/aashish-pant-96b305186/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Birat Poudel", "Communication", "poudel.birat25@gmail.com" ,"https://www.linkedin.com/in/birat-poudel-6562ba16b/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Roshan Thapa", "Communication", "thaparoshan3722@gmail.com" ,"https://www.linkedin.com/in/roshan-thapa-294498251"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Laxman bhandari", "Communication","email-field"],		
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Prashna Poudel", "Communication", "prashnapoudel15@gmail.com" ,"https://www.linkedin.com/in/prashna-poudel-69a811242/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Rituram Ojha", "Electronics", "bikashojha904@gmail.com" ,"https://www.linkedin.com/in/rituramojha/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Ayush Raj Shah", "Electronics", "ayush.078bme006@tcioe.edu.np"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Joseph Thapa Magar", "Electronics", "josephthapa911@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Bishal Gautam", "Chassis", "gtm.bishal57@gmail.com" ,"https://www.linkedin.com/in/bishal-gautam-88b633226/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Divyan Acharya", "Chassis", "divyanacharya777@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Ragiv Dhakal", "Chassis", "ragivdhakal@gmail.com" ,"https://www.linkedin.com/in/ragiv-dhakal-983051243/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Subash Bhujel", "Vehicle Dynamics", "ronaldliomes@gmail.com"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Bivek Raymajhi", "Vehicle Dynamics", "raymajhibivek2059@gmail.com" ,"https://www.linkedin.com/in/bivek-raymajhi-b9793a193/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Elish khadka", "Vehicle Dynamics", "alishkdk2000@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Bikalpa Poudel", "Vehicle Dynamics", "poudelbikalpa21@gmail.com" ,"https://www.linkedin.com/in/bikalpa-poudel-478578269/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Nischal Karki", "Vehicle Dynamics", "karkinischal993@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Sharad Timilsina", "Bodywork", "sharadtimilsina3@gmail.com" ,"https://www.linkedin.com/in/sharad-timilsina-388175225"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Milan Shrestha", "Bodywork", "ms6297866@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Pukar khanal", "Bodywork", "pukarkhanal003@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Sharan shakya", "Motor & Powertrain", "sharanshakya011101101@gmail.com ","https://www.linkedin.com/in/sharan-shakya-8b6469252/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Arun Koirala", "Motor & Powertrain", "arunkoiralak47@gmail.com"],	
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Kristina Bhandari", "Autonomous", "christinabhandari60@gmail.com" ,"https://www.linkedin.com/in/kristina-bhandari-b45147209/"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Rajendra Baskota", "Autonomous", "raj.baskota056@gmail.com" ,"https://www.linkedin.com/in/rajendrabaskota"],
                      ["https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg","Prabin Bohara", "Autonomous", "prabinbohara10@gmail.com" ,"https://www.linkedin.com/in/prabinbohara10"]
                    ];

function Teams() {
  return (
    <div className="page Team-Members flex-c-se-c">
        <span className="page-title">Team Members</span>
        <br />
        <Cards cardObjects={teamMembersInfo} />
    </div>
  )
}

export default Teams