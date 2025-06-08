import overlayImg from "../assets/Images/HelperImgs/overlay.png";
import schoolCrmMainImg from "../assets/Images/HelperImgs/SchoolCRMMain.jfif";
import schoolCrmSecImg from "../assets/Images/Projects/schoolCrmMainImg.png";
import mainImgPortfolio from "../assets/Images/Projects/PortfolioMainImg.png";
import secImgPortfolio from "../assets/Images/Projects/image.png";
import empMainImg from "../assets/Images/Projects/EmpMainImg.png";
import AradhyaTechMainImg from "../assets/Images/Projects/AradhyaTechMainImg.png";
import AradhyaTechSecImg from "../assets/Images/Projects/AradhyaTechSecImg.png";
import Img01 from "../assets/Images/Numbers/01.svg";
import Img02 from "../assets/Images/Numbers/02.svg";
import Img03 from "../assets/Images/Numbers/03.svg";
import Img04 from "../assets/Images/Numbers/04.svg";

const projectData = [
  {
    techStack: "React.js, Locomotive Scroll, Framer Motion",
    projectName: "Portfolio 2025",
    mainImg: secImgPortfolio,
    secImg: mainImgPortfolio,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://misterhemant.tech",
    svgNumberImg: Img01,
  },
  {
    techStack: "React, Node.js, Express, MongoDB",
    projectName: "School CRM",
    mainImg: schoolCrmMainImg,
    secImg: schoolCrmSecImg,
    overlayImg: overlayImg,
    githubLink: "https://github.com/HemantMedhsia/crm.misterhemant.tech",
    liveLink: "https://crm.misterhemant.tech",
    svgNumberImg: Img02,
  },
  {
    techStack: "React, Node.js, Express, MongoDB, Whatsapp API",
    projectName: "Employee Management Portal",
    mainImg: schoolCrmMainImg,
    secImg: empMainImg,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://employee-management-vdxv.vercel.app/",
    svgNumberImg: Img03,
  },
  {
    techStack: "React, Node.js, Express, MongoDB",
    projectName: "Aradhya Technologies Main Website",
    mainImg: AradhyaTechSecImg,
    secImg: AradhyaTechMainImg,
    overlayImg: overlayImg,
    githubLink: "",
    liveLink: "https://aradhya-tech-solutions-fpix.vercel.app/",
    svgNumberImg: Img04,
  },
];

export default projectData;
