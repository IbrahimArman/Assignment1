import data from './data.json'

/**
 * fetch courses from API
 * const fetchCourses = () => {
    return data
}
 */


/**
 * create single course html with givin course info
 */

const createCourse = (courseInfo) => { 
    return `
        <div class="card">
            <img src="images/html.png" alt="Topic 1">
            <div class="card-content">
                <h4 class="description">Web Development Languages</h4>
                <p class="topic-name">HTML</p>
                <div class="rating">
                    <span class="stars">★★★★☆</span>
                </div>
                <p class="author">Author: Sarah Smith</p>
            </div>
        </div>
    `
}
const createCourseList = () => { }
const renderCourses = () => { 
    const coursesCon = document.getElementsByClassName("card")
    coursesCon.innerHTML = createCourse()
}

document.onload = renderCourse()
