import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" style={{marginTop:40}}>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hello! I'm a passionate and experienced developer with expertise in
          React.js and React Native. My journey as a frontend developer began
          with a fascination for creating dynamic and interactive user
          interfaces that bring ideas to life. Over the years, I have honed my
          skills in crafting beautiful and performant applications for both web
          and mobile platforms. In the world of React.js, I have embraced its
          declarative nature, which allows me to build UI components that are
          not only modular but also easy to maintain and scale. Leveraging the
          power of React's virtual DOM, I optimize rendering performance,
          ensuring a smooth user experience even with complex interfaces.
        </p>

        <br />

        <p className="text-xl">
          Being a part of the React Native community has opened exciting
          possibilities for me to extend my passion for frontend development to
          the mobile world. I find immense joy in crafting mobile applications
          that retain the look and feel of native apps while maximizing code
          reuse across different platforms. React Native's ability to bridge the
          gap between web and mobile development has been a game-changer, and I
          am thrilled to be a part of this transformative technology.
        </p>
        <p className="text-xl mt-10">In summary, I am an adaptable and dedicated React.js and React Native developer who is enthusiastic about creating innovative applications with a focus on performance, aesthetics, and usability. I am excited to continue my journey in frontend development, pushing the boundaries of what can be achieved with these powerful technologies. Let's build something incredible together!</p>
      </div>
    </div>
  );
};

export default About;
