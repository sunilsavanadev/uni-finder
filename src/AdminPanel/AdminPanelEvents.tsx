import { collection, addDoc, setDoc, doc, getDoc, getDocs, getDocFromCache } from "firebase/firestore"; 
import { db } from "../firebase";


const setDocs =async(data:any,name:string)=>{
    await setDoc(doc(db, "universities", name),data)
    console.log(data)
}
const getuniversities =async()=>{
    const docRef = getDocs(collection(db, "universities"));
    var result =await docRef
    return result
}

const getuniversitydata=async(university:string)=>{
    const docRef = doc(db, "universities",university);
    const docSnap = await getDoc(docRef);
    return docSnap
}
export {setDocs,getuniversities,getuniversitydata}
