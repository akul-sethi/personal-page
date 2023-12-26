import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-48 m
                    flex flex-col
                    bg-blue-dark text-white shadow-lg">
      <h1 className="font-serif">Akul Sethi </h1>
     
      <div className="font-serif italic"> Undergraduate researcher at Northeastern University studying computer science and physics. A member of GammaTau research organization specializing in Artificial Intelligence 
            programming languages
      </div>

      <hr className="m-6"/>

      <SideBarItem text="Home"/>
      <SideBarItem text="SethiScript"/>
      <SideBarItem text="Projects"/>
      <SideBarItem text="Publications"/>

      <hr className="bg-blue-shadowdark"/>

      <SideBarIcon item={<FaGithub />} />
      <SideBarIcon item={<FaLinkedin/>} />
      <SideBarIcon item={<FaEnvelope/>} />
      <SideBarIcon item={<IoIosDocument/>} />



      
    </div>
  )
}

const SideBarItem= (prop) => {
  return (
    <i className="side-bar-item">{prop.text}</i>
  )
};

const SideBarIcon = ({ item }) => (
    <div className="side-bar-item">
    {item}
    </div>   
);

export default SideBar
