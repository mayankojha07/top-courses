import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const allCourses = [
    {
      id: "1",
      title: "Web Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic websites",
      image: {
        url: "https://static.wixstatic.com/media/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg/v1/crop/x_201,y_60,w_2095,h_1664/fill/w_838,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg",
        alt: "WebD Fundamentals",
      },
    },

    {
      id: "2",
      title: "Andriod Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic Android Apps",
      image: {
        url: "https://courses.wscubetech.com/s/store/courses/62eb71c70cf2d187e0aaace1/cover.jpg?v=6",
        alt: "Android Fundamentals",
      },
    },

    {
      id: "3",
      title: "Blockchain Development Fundamentals",
      description:
        "This course covers the basic concepts and tools of Data Mining and Cryptography",
      image: {
        url: "https://101blockchains.com/wp-content/uploads/2023/09/Blockchain-Fundamentals-Free-Course.png",
        alt: "Android Fundamentals",
      },
    },

    {
      id: "4",
      title: "Web Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic websites",
      image: {
        url: "https://static.wixstatic.com/media/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg/v1/crop/x_201,y_60,w_2095,h_1664/fill/w_838,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg",
        alt: "WebD Fundamentals",
      },
    },

    {
      id: "5",
      title: "Andriod Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic Android Apps",
      image: {
        url: "https://courses.wscubetech.com/s/store/courses/62eb71c70cf2d187e0aaace1/cover.jpg?v=6",
        alt: "Android Fundamentals",
      },
    },

    {
      id: "6",
      title: "Blockchain Development Fundamentals",
      description:
        "This course covers the basic concepts and tools of Data Mining and Cryptography",
      image: {
        url: "https://101blockchains.com/wp-content/uploads/2023/09/Blockchain-Fundamentals-Free-Course.png",
        alt: "Android Fundamentals",
      },
    },

    {
      id: "7",
      title: "Web Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic websites",
      image: {
        url: "https://static.wixstatic.com/media/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg/v1/crop/x_201,y_60,w_2095,h_1664/fill/w_838,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6f1763_269e6f9643a04e7796a1d04ea3a2d3ae~mv2.jpg",
        alt: "WebD Fundamentals",
      },
    },

    {
      id: "8",
      title: "Andriod Development Fundamentals",
      description:
        "This course covers the basic concepts and tools for building static and dynamic Android Apps",
      image: {
        url: "https://courses.wscubetech.com/s/store/courses/62eb71c70cf2d187e0aaace1/cover.jpg?v=6",
        alt: "Android Fundamentals",
      },
    },

    {
      id: "9",
      title: "Blockchain Development Fundamentals",
      description:
        "This course covers the basic concepts and tools of Data Mining and Cryptography",
      image: {
        url: "https://101blockchains.com/wp-content/uploads/2023/09/Blockchain-Fundamentals-Free-Course.png",
        alt: "Android Fundamentals",
      },
    },
  ];

  // Api url is not working
  // const getCourses = () => {
  //   if (category === "All") {
  //     Object.values(courses).forEach((courseCategory) => {
  //       courseCategory.forEach((course) => {
  //         allCourses.push(course);
  //       });
  //     });
  //     return allCourses;
  //   } else {
  //     return courses[category];
  //   }
  // };

  const [likedCourses, setLikedCourses] = useState([]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        // getCourses().map((course) => {
        allCourses.map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      }
    </div>
  );
};

export default Cards;
