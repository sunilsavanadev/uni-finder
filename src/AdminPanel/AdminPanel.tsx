import React, {useEffect, useState } from 'react'
import "./AdminPanel.css"
import {getuniversities, setDocs } from './AdminPanelEvents'
function AdminPanel () {
    const[formdata,setformdata]=useState<any>({})
    const[universities,setUniversities]=useState<any>([])
    const[render,setRender] = useState(false)
    const formsubmit=(e:any)=>{
        e.preventDefault()
        setDocs(formdata,formdata["name"]).then(()=>{
            window.alert("university added")
        })
    }
    const handleformdata=(e:any)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    var univs:string[]=[]
    async function renderFunction() {
        var result = await getuniversities()
        result.forEach((res)=>{ return universities.includes(res.id)?"": setUniversities([...universities,res.id])})
    }
    renderFunction()
    console.log('univ',universities)
     
  return (
    <div className='pannel-container'>
        <div className='universities'>
            {universities.map((value:any)=>{
                return(
                    <div>{value}</div>
                )
            })}
        </div>
        <form className='form' onSubmit={formsubmit}>
            <div className='form-content'>
                <label htmlFor="name">University Name:</label>
                <input id='name' type="text" name="name" required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="rank">University Ranking(QS) :</label>
                <input id="rank"type="text" name="QSranking" required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="avg_tution">Avg_tution:</label>
                <input id='avg_tution' type="text" name="avg_tution" required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="avg_livingcost">Avg_livingcost:</label>
                <input id='avg_livingcost' type="text" name="avg_livingcost" required onChange={handleformdata} />
            </div>
            <div className='form-content-exams'>
              <div className='exams'>
                <label htmlFor="gre">GRE:</label>
                <input id='gre' type="text" name="gre" onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="toefl">TOEFL:</label>
                <input id='toefl' type="text" name="toefl" onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="dulingo">DULINGO:</label>
                <input id='dulingo' type="text" name="dulingo" onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="ielts">IELTS:</label>
                <input id='ielts' type="text" name="ielts" onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="sat">SAT:</label>
                <input id='sat' type="text" name="sat" onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="gmat">GMAT:</label>
                <input id='gmat' type="text" name="gmat" onChange={handleformdata} />
              </div>
            </div>
            <div className='about'>
                <label  htmlFor="about">About:</label>
                <textarea id='abput' name="about" onChange={handleformdata} />
            </div>  
            <input className='submit' type="submit" />
        </form>
    </div>
  )
}

export default AdminPanel