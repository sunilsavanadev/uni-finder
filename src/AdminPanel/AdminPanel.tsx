import { useState } from "react"
import"./AdminPanel.css"
import { AddCourse, AddUniversity, UniversityData } from "./AdminPanelEvents"
function AdminPanel () {
  const [state,setState]=useState("university")
  const [data,setData]=useState({
    name:"",
    ranking:"",
    tution:"",
    living:"",
    link:"",
    about:""
  })
  const [courseData, setCourseData] = useState({
    course_id: '',
    course_name: '',
    level: '',
    duration: '',
    academic_criteria: '',
    additional_requirements: '',
    fees: '',
    intake: '',
    description: '',
    career_opportunities: ''
  });
// fetching university data
UniversityData().then((val:any)=>{
  val.forEach((doc:any) => {
    console.log(doc.id,"=>",doc.data())
  })})

//onclick function of university button
  const OnclickUniversity=()=>{
    setState("university")
  }
//onclick function for course button
  const OnclickCourse =()=>{
    setState("course")
  }
//onclick function for exam button
    const OnclickExam =()=>{
      setState("exam")
    }
//onclick function for eligibility  button
  const OnclickEligibility =()=>{
    setState("eligibility")
  }
// onformsubmit function
const OnFormsubmit=async(e:any)=>{
  e.preventDefault()
 await AddUniversity()
 setData({
  name:"",
  ranking:"",
  tution:"",
  living:"",
  link:"",
  about:""
})
}
//HandleChange function
const HandleChange=(e:any)=>{
  setData(()=>({
    ...data,
    [e.target.name]:e.target.value
  }))
}
const handleChange = (e:any) => {
  const { name, value } = e.target;
  setCourseData({
    ...courseData,
    [name]: value
  });
};

const handleSubmit = (e:any) => {
  e.preventDefault();
  console.log(courseData); // Do whatever you want with the form data
};
  return (
    <div className="container">
      <div className="section-buttons">
        <button onClick={OnclickUniversity} style={{background:state==="university"?"#3d5ee1":"",color:state==="university"?"white":"#6f6f6f"}}>University</button>
        <button onClick={OnclickCourse} style={{background:state==="course"?"#3d5ee1":"",color:state==="course"?"white":"#6f6f6f"}}>Courses</button>
        <button onClick={OnclickExam} style={{background:state==="exam"?"#3d5ee1":"",color:state==="exam"?"white":"#6f6f6f"}}>Exams</button>
        <button onClick={OnclickEligibility} style={{background:state==="eligibility"?"#3d5ee1":"",color:state==="eligibility"?"white":"#6f6f6f"}}>Eligibily</button>
      </div>
      {state==="university"&&
      <div className="form-container">
        <form className="form" onSubmit={OnFormsubmit}>
          <div className="form-input">
            <label>Name</label>
            <input name="name" value={data.name} required onChange={HandleChange}/>
          </div>
          <div className="form-input" >
            <label>Ranking</label>
            <input name="ranking" value={data.ranking} required onChange={HandleChange}/>
          </div>
          <div className="form-input">
            <label>Avg Tution</label>
            <input name="tution" value={data.tution} required onChange={HandleChange}/>
          </div>
          <div className="form-input">
            <label>Avg Living</label>
            <input name="living" value={data.living} required onChange={HandleChange}/>
          </div>
          <div className="form-input">
            <label>university link</label>
            <input name="link" value={data.link} required onChange={HandleChange}/>
          </div>
          <div className="form-input">
            <label>About</label>
            <input name="about" value={data.about} required onChange={HandleChange}/>
          </div>
          <input type="submit" value="submit" onClick={()=>{AddUniversity()}}/>
        </form>
        <form onSubmit={handleSubmit}>
      <label>
        Course ID:
        <input type="text" name="course_id" value={courseData.course_id} onChange={handleChange} />
      </label>
      <label>
        Course Name:
        <input type="text" name="course_name" value={courseData.course_name} onChange={handleChange} />
      </label>
      <label>
        Level:
        <input type="text" name="level" value={courseData.level} onChange={handleChange} />
      </label>
      <label>
        Duration:
        <input type="text" name="duration" value={courseData.duration} onChange={handleChange} />
      </label>
      <label>
        Academic Criteria:
        <input type="text" name="academic_criteria" value={courseData.academic_criteria} onChange={handleChange} />
      </label>
      <label>
        Additional Requirements:
        <input type="text" name="additional_requirements" value={courseData.additional_requirements} onChange={handleChange} />
      </label>
      <label>
        Fees:
        <input type="text" name="fees" value={courseData.fees} onChange={handleChange} />
      </label>
      <label>
        Intake:
        <input type="text" name="intake" value={courseData.intake} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={courseData.description} onChange={handleChange} />
      </label>
      <label>
        Career Opportunities:
        <input type="text" name="career_opportunities" value={courseData.career_opportunities} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
      </div>}
      
    </div>
  )
}

export default AdminPanel