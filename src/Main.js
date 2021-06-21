import React, { useState } from 'react'

export default function Main() {
    
    const[taskname, setaskname] = useState('')
    const [tasklist,settasklist] = useState([])
    function addtask()
    {
        settasklist([...tasklist,taskname])
    }
    const tasklistcontent = tasklist.map((task, index)=>
    {
        return(
            <div>
                <p>{task}</p>
                <i class="fas fa-trash" onClick={()=>deletetask(index)}></i>
            </div>

        )
    })
    function deletetask(index){
        var duparray = [...tasklist]
        duparray.splice(index,1)
        settasklist(duparray)
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded ">
                    <img src="top.png" alt="top"/>
                    <h1> DailyTask </h1>
                    <br/>
                    <input type="text" placeholder="Enter Task" className="form-control" value={taskname}
                    onChange={(e)=>setaskname(e.target.value)}
                    />
                    <button className="btn btn-dark" onClick={addtask}>Add</button>
                    <br/>
                    {tasklistcontent}
                </div>
            </div>
        </div>
    )
}
