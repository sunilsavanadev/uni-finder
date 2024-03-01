import React, {useEffect, useState } from 'react'
import "./AdminPanel.css"
import {getuniversities, getuniversitydata, setDocs } from './AdminPanelEvents'
function AdminPanel () {
    const[formdata,setformdata]=useState<any>({})
    const[universities,setUniversities]=useState<any>([])
    const[data,setData]=useState<any>({})

// On click form submit updating the university list to the database.
    const formsubmit=(e:any)=>{
        e.preventDefault()
        setDocs(formdata,formdata["name"]).then(()=>{
            window.alert("university added")
        })
    }
// Function for getting all the require infor mation from the form.
    const handleformdata=(e:any)=>{
      e.preventDefault()
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    async function renderFunction() {
        var result = await getuniversities()
        result.forEach((res)=>{ return universities.includes(res.id)?"": setUniversities([...universities,res.id])})
    }
    renderFunction()  
    const onclickUniversity=async(value:string)=>{
      await getuniversitydata(value).then((result:any)=>{
          console.log(result.data())
       })
    }
  return (
    <div className='pannel-container'>
        <div className='universities'>
            {universities.map((value:any)=>{
                return(
                    <div onClick={()=>onclickUniversity(value)}>{value}</div>
                )
            })}
        </div>
        <form className='form' onSubmit={formsubmit}>
            <div className='form-content'>
                <label htmlFor="name">University Name:</label>
                <input id='name' type="text" name="name" value={data.name} required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="rank">University Ranking(QS) :</label>
                <input id="rank"type="text" name="QSranking" value={data.QSranking} required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="avg_tution">Avg_tution:</label>
                <input id='avg_tution' type="text" name="avg_tution" value={data.avg_tution} required onChange={handleformdata} />
            </div>
            <div className='form-content'>
                <label htmlFor="avg_livingcost">Avg_livingcost:</label>
                <input id='avg_livingcost' type="text" name="avg_livingcost" value={data.avg_livingcost}  required onChange={handleformdata} />
            </div>
            <div className='form-content-exams'>
              <div className='exams'>
                <label htmlFor="gre">GRE:</label>
                <input id='gre' type="text" name="gre" value={data.gre}  onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="toefl">TOEFL:</label>
                <input id='toefl' type="text" name="toefl" value={data.toefl}  onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="dulingo">DULINGO:</label>
                <input id='dulingo' type="text" name="dulingo" value={data.dulingo}  onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="ielts">IELTS:</label>
                <input id='ielts' type="text" name="ielts" value={data.ielts} onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="sat">SAT:</label>
                <input id='sat' type="text" name="sat" value={data.sat} onChange={handleformdata} />
              </div>
              <div className='exams'>
                <label htmlFor="gmat">GMAT:</label>
                <input id='gmat' type="text" name="gmat" value={data.gmat} onChange={handleformdata} />
              </div>
            </div>
            <div className='about'>
                <label  htmlFor="about">About:</label>
                <textarea id='abput' name="about" value={data.about} onChange={handleformdata} />
            </div>  
            <input className='submit' type="submit" />
        </form>
    </div>
  )
}

export default AdminPanel