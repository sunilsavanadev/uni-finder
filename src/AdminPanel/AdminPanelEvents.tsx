import React from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";


const universityData = {
  university_id: 1,
  university_name: "Example University",
  country: "India",
  website_url: "https://exampleuniversity.edu",
  description: "Example University is a prestigious institution offering a wide range of programs.",
  logo_url: "https://exampleuniversity.edu/logo.png",
  contact_information: {
    address: "123 Example St, City, State, Country",
    phone: "+91-1234567890",
    email: "info@exampleuniversity.edu"
  },
  social_media_links: {
    facebook: "https://www.facebook.com/exampleuniversity",
    twitter: "https://twitter.com/exampleuniversity",
    instagram: "https://www.instagram.com/exampleuniversity"
  }
};

const coursesData = 
  {
    course_id:1,
    university_id:"1",
    course_name: "Bachelor of Engineering",
    course_discription:"good course",
    tution:"$15,000",
    credits:"30",
    level: "Undergraduate",
    duration: "4 years",
    Toefl:"85",
    Gre:"310",
    Sat:"650",
    Ielts:"6.5",
    Dulingo:"100",
  }
// Add a new document in collection "universities"
const AddUniversity= async () => {
  const DocRef = doc(db, "Universities",universityData.university_name);
  await setDoc(DocRef,universityData);
}
const AddCourse= async () => {
  const DocRef = doc(db, "courses",coursesData.course_name);
  await setDoc(DocRef,coursesData);
}
// getting information from universities
const UniversityData = async()=>{
  const querySnapshot = await getDocs(collection(db, "Universities"));
  return querySnapshot

}

export {AddUniversity,UniversityData,AddCourse}
