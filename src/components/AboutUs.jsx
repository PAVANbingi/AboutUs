// const AboutUs = () => {
//     return (
//       <div className="max-w-7xl mx-auto pt-20 px-6">
//         <h1>About Us</h1>
//         <p>well about our team, company, or project.</p>
//       </div>
//     );
//   };
  
//   export default AboutUs;
// --------------------
// without styles 
//   import { aboutUs } from "../constants"; 
// const AboutUs = () => {
//   return (
//     <section className="about-us-section">
//       <h1>{aboutUs.title}</h1>
//       <p>{aboutUs.description}</p>
//       <h2>Our Mission</h2>
//       <p>{aboutUs.mission}</p>
//       <h2>Our Vision</h2>
//       <p>{aboutUs.vision}</p>

//       <h2>Meet the Team</h2>
//       <div className="team-members">
//         {aboutUs.team.map((member, index) => (
//           <div key={index} className="team-member">
//             <img src={member.image} alt={`${member.name} photo`} />
//             <h3>{member.name}</h3>
//             <p>{member.role}</p>
//             <p>{member.bio}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// src/components/AboutUs.jsx
import { aboutUs } from "../constants"; 

const AboutUs = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <section className="relative mt-20 border-b border-neutral-800 pb-20">
       
      <div className="text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
        <p className="mt-5 text-lg text-neutral-500 transition-transform duration-700 ease-in-out transform hover:scale-105">{aboutUs.description}</p>
      </div>

      <div className="mt-20 text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Mission
          </span>
        </h2>
        <p className="mt-2 text-md text-neutral-500 transition-transform duration-700 ease-in-out transform hover:scale-105">{aboutUs.mission}</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Vision
          </span>
        </h2>
        
        <p className="mt-2 text-md text-neutral-500 transition-transform duration-700 ease-in-out transform hover:scale-105">{aboutUs.vision}</p>
      </div>

      <div className="mt-20 text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
      Meet the{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Team
          </span>
        </h2>
       
      <div className="flex flex-wrap justify-center mt-10">
  {aboutUs.team.map((member, index) => (
    <div key={index} className="team-member w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-neutral-900 p-6 rounded-lg shadow-lg text-center transition-transform duration-700 ease-in-out transform hover:scale-105">
        <img src={member.image} alt={`${member.name} photo`} className="w-24 h-24 mx-auto rounded-full" />
        <h3 className="mt-4 text-xl font-semibold text-orange-500">{member.name}</h3>
        <p className="text-md text-white-400">{member.role}</p>
        <p className="text-md text-neutral-500 mt-2">{member.bio}</p>
      </div>
    </div>
  ))}
</div>
      </div>

      
    </section>

   </div>
  );
};

export default AboutUs;
