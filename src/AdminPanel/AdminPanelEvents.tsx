import { collection, addDoc, setDoc, doc, getDoc, getDocs } from "firebase/firestore"; 
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


export {setDocs,getuniversities}
