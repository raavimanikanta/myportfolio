import React, { createContext, useState } from 'react'
export const ImagesDetails =createContext();

const ImageContext = (props) => {
    const [Images , setImages]=useState([
        {
          id:0,
        image1:"https://tse3.mm.bing.net/th?id=OIP.yaBt-afemMFrmPFD43G-qQHaGY&pid=Api&P=0&w=198&h=171",
        },
        {
        image2:"https://tse1.mm.bing.net/th?id=OIP.7D5uM_zPzVpXQMoruEzRPAHaKc&pid=Api&P=0&w=114&h=161"
        },
        {
        image3:"https://tse3.mm.bing.net/th?id=OIP.tMybbcdrzAbz2DZWcg695wHaHa&pid=Api&P=0&w=160&h=160"},
        {image4:'https://tse3.mm.bing.net/th?id=OIP.-bqEbV_nqalVVwbvaYOZqgHaE8&pid=Api&P=0&w=236&h=157'},
        {image5:"https://tse1.mm.bing.net/th?id=OIP.bg2y0P89OvLljni2vhaxZgHaHd&pid=Api&P=0&w=180&h=181"},
        {image6:"https://tse4.mm.bing.net/th?id=OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa&pid=Api&P=0&w=156&h=156"},

        ])
    const [Projects,setProjects]=useState([
      {
        id:1,
        Name:"Basic HTML Page",
        project1:"https://raavimanikanta.github.io/backtracking1/",
        image:"https://media.istockphoto.com/vectors/creative-blog-web-page-template-vector-id1043479686?k=6&m=1043479686&s=170667a&w=0&h=kjhVInVsLdNuIgR6Os5bWv2GLX5N0U3wbVhjrSWnY5s=",
      },
      {
        id:2,
        Name:"Todo App UI Web",
        project2:"https://raavimanikanta.github.io/css-project-2/",
        image:"https://qbsolucionesweb.com/wp-content/uploads/2020/09/web-estatica2-980x653.jpg"
      },
      {
        id:3,
        Name:"Digital Clock",
        project3:"https://raavimanikanta.github.io/clockproject/",
        image:"https://i.ytimg.com/vi/QyvxrrWBl00/maxresdefault.jpg"
      },
      {
        id:4,
        Name:"Todo App JS",
        project4:"https://raavimanikanta.github.io/todoappjs/",
        image:"https://res.cloudinary.com/practicaldev/image/fetch/s--pyyuGSZ9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/o96lsrld21tk232kidu4.png"
      },
      {
        id:5,
        Name:"React Blog App",
        project5:"https://rad-gecko-4364d9.netlify.app/",
        image:"https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png"
      }
    ]);

    const[peoples,setpeoples]=useState([
      {
        image1:"https://raavimanikanta.github.io/portfolio/p1.jpg",
        name:"Elizabeth Martin",
        info:"Saves space inc",
        description:"Lorem ipsum is simple dummy text of the printing and type setting industry .Lorem ipsum has been the  most usable thing for random text",
      },
      {
        image1:"https://raavimanikanta.github.io/portfolio/p2.jfif",
        name:"Albert Donko",
        info:"Screep app",
        description:"Lorem ipsum is simple dummy text of the printing and type setting industry .Lorem ipsum has been the  most usable thing for random text",
      },
      {
        image1:"https://raavimanikanta.github.io/portfolio/p3.jfif",
        name:"Daniel",
        info:"My travel.com",
        description:"Lorem ipsum is simple dummy text of the printing and type setting industry .Lorem ipsum has been the most usable thing for random text",
      },
    ])
  return (
   
    <ImagesDetails.Provider value={{value1:[Images,setImages],value2:[Projects,setProjects],value3:[peoples,setpeoples]}}>
      {props.children}
    </ImagesDetails.Provider>

    
  )
}

export default ImageContext