const lessons = [
  { 
    title: "HTML", 
    src: "https://www.youtube.com/embed/UB1O30fR-EE",
    thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/0.jpg" 
  },
  { 
    title: "CSS", 
    src: "https://www.youtube.com/embed/yfoY53QXEnI",
    thumbnail: "https://img.youtube.com/vi/yfoY53QXEnI/0.jpg" 
  },
  { 
    title: "JAVASCRIPT", 
    src: "https://www.youtube.com/embed/hdI2bqOjy3c",
    thumbnail: "https://img.youtube.com/vi/hdI2bqOjy3c/0.jpg" 
  },
  { 
    title: "MACHINE LEARNING", 
    src: "https://www.youtube.com/embed/ukzFI9rgwfU",
    thumbnail: "https://img.youtube.com/vi/ukzFI9rgwfU/0.jpg" 
  },

  { 
    title: "ARTIFICIAL INTELLIGENCE", 
    src:" https://www.youtube.com/embed/JMUxmLyrhSk",
    thumbnail: "https://img.youtube.com/vi/JMUxmLyrhSk/0.jpg" 
  },
    { 
      title: "NODE JS", 
      src: "https://www.youtube.com/embed/TlB_eWDSMt4",
      thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/0.jpg" 
    },

    { 
      title: "MONGODB", 
      src: "https://www.youtube.com/embed/c2M-rlkkT5o",
      thumbnail: "https://img.youtube.com/vi/c2M-rlkkT5o/0.jpg" 
    },


    { 
      title: "REACT JS", 
      src: "https://www.youtube.com/embed/SqcY0GlETPk",
      thumbnail: "https://img.youtube.com/vi/SqcY0GlETPk/0.jpg" 
    },

    { 
      title: "PYTHON", 
      src: "https://www.youtube.com/embed/kqtD5dpn9C8",
      thumbnail: "https://img.youtube.com/vi/kqtD5dpn9C8/0.jpg" 
    },
    { 
      title: "GEN AI", 
      src: "https://www.youtube.com/embed/veqPPfBGtmA",
      thumbnail: "https://img.youtube.com/vi/veqPPfBGtmA/0.jpg" 
    },
   
  
];

const videoContainer = document.getElementById("video-container");

lessons.forEach((lesson) => {
  // Create a container for each lesson
  const lessonContainer = document.createElement("div");
  lessonContainer.classList.add("lesson");

  // Create an image for the lesson thumbnail
  const thumbnail = document.createElement("img");
  thumbnail.src = lesson.thumbnail;
  thumbnail.alt = lesson.title;
  thumbnail.style.cursor = "pointer"; // Add a pointer cursor

  // Add a click event to redirect to the video
  thumbnail.addEventListener("click", () => {
    window.open(lesson.src, "_blank");
  });

  // Create a title for the lesson
  const title = document.createElement("h3");
  title.textContent = lesson.title;

  // Append the image and title to the lesson container
  lessonContainer.appendChild(thumbnail);
  lessonContainer.appendChild(title);

  // Append the lesson container to the video container
  videoContainer.appendChild(lessonContainer);
});