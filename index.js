// Class definition for Course
class Course {
  constructor(
    category,
    rating,
    name,
    image,
    topic,
    description,
    subtopics,
    id
  ) {
    this.category = category;
    this.rating = rating;
    this.name = name;
    this.image = image;
    this.topic = topic;
    this.description = description;
    this.subtopics = subtopics;
    this.id = id;
  }

  // Convert a JSON object into a Course instance
  static fromJSON(json) {
    return new Course(
      json.category,
      json.rating,
      json.name,
      json.image,
      json.topic,
      json.description,
      json.subtopics,
      json.id
    );
  }

  // Convert a list of JSON objects into a list of Course instances
  static fromJSONList(jsonList) {
    return jsonList.map(Course.fromJSON);
  }
}

fetch("topics.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data fetched:", data);
    const courses = Course.fromJSONList(data);
    renderCourses(courses);
  })
  .catch((error) => console.error("Error fetching courses:", error));

// Function to render courses to the DOM
function renderCourses(courses) {
  const container = document.getElementById("card");
  if (!container) {
    console.error("Container element not found!");
    return;
  }

  console.log("Rendering courses:", courses);

  courses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";

    courseDiv.innerHTML = `
     <a class= "course-image222" href="topics.html?id=${course.id}">
      <img src="/Logos/${course.image}" alt="${course.topic}">
     </a>
      <div class = "course-text"> 
      <p class="category"><strong></strong> ${course.category}</p>
      <p class="topic"><strong></strong> ${course.topic}</p>
      <p class="rating"><strong>${course.rating}</strong> </p>
      <p class="name">Author : ${course.name}</p>
      </div>
    `;

    container.appendChild(courseDiv);
  });
}

// import data from './data.js'

// /**
//  * fetch courses from API
//  * const fetchCourses = () => {
//     return data
// }
//  */


// /**
//  * create single course html with givin course info
//  */

// const createCourse = (courseInfo) => { 
//     return `
//         <div class="card">
//             <img src="images/html.png" alt="Topic 1">
//             <div class="card-content">
//                 <h4 class="description">Web Development Languages</h4>
//                 <p class="topic-name">HTML</p>
//                 <div class="rating">
//                     <span class="stars">★★★★☆</span>
//                 </div>
//                 <p class="author">Author: Sarah Smith</p>
//             </div>
//         </div>
//     `
// }
// const createCourseList = () => { }
// const renderCourses = () => { 
//     const coursesCon = document.getElementsByClassName("cards-cont")[0];
//     console.log(coursesCon);
//     coursesCon.innerHTML = createCourse();
// }

// document.onload = renderCourses();
