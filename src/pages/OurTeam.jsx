import React from 'react';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Mr. Hemant Singh',
      role: 'Founder / Partner',
      image: team1,
    },
    {
      name: 'Mr. Vijay Pal',
      role: 'Partner',
      image: team2,
    },
  ];

  return (
    <section className="px-4">
      {/* Heading */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-[32px] md:text-4xl font-black text-[#37517E] font-jost">
          Meet Our Expert Team
        </h1>
         {/* Line Always Visible */}
          <span className="block w-24 h-[3px] mx-auto mt-2 bg-[#444444] rounded-full"></span>
        <p className="text-[16px] text-[#444444] leading-relaxed font-jost">
          At Fintaxion Consulting, our team is composed of highly skilled professionals specializing in financial planning, taxation, audit, and accounting. With extensive industry experience, we bring a deep understanding of complex regulatory frameworks, ensuring compliance, strategic growth, and financial efficiency for businesses of all sizes.
        </p>
      </div>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6 w-full max-w-[480px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 sm:w-40 object-cover"
            />
            <div className="text-center sm:text-left font-jost">
              <p className="font-semibold text-lg text-[#37517E]">
                {member.name}
              </p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
