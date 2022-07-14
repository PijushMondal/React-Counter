import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Wrapper.css';
const url = "https://jsonplaceholder.typicode.com/posts";



const Wrapper = ()=>{
    const [data,setData] = useState([])
    const [count, setCounter] = useState(1)
    const [error,setError] = useState({
        isError:false,
        errorMessage:""
    })

    const incCounter = ()=>setCounter(oldCount=>oldCount<data.length?oldCount+1:oldCount)
       
    const decCounter = ()=>setCounter(oldCount=>oldCount<=1?oldCount:oldCount-1)

    const fetchData = ()=>{
        axios.get(url).then(response => {
            setData(response.data);
            setError({
                isError:false,
                errorMessage:""
            })
        }).catch(err=>{console.log(err);
            setError({
                isError:true,
                errorMessage:err.message
            })
        })
    }

    useEffect(()=>{
        fetchData();
    },[])
     

   return (
       <div style={{textAlign:'center'}}>
           <div>
            <h2>Count : {count} </h2>   
           <button  style={{background:'blue',color:'#fff',cursor:'pointer'}}  onClick={incCounter}>
         Increment
        </button>
        <button  style={{background:'red',color:'#fff',cursor:'pointer'}}  onClick={decCounter}>
         Decrement
        </button>
        </div>

            <h1 style={{textAlign:'center'}}>Data Table</h1>
            <h2>Length:{data.length}</h2>

            {error.isError ? 
                <div>
                    <h1>Error!</h1>
                    <p>{error.errorMessage}</p>
                    <button onClick={fetchData}>Retry to fetch data</button>
                </div>
            :
                <table id="users">
                    <thead>
                        <tr>
                            <th>USER-ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                        
                        
                    </thead>
                    <tbody>
                        <CustomTable data={data}  activeRow={count} />
                    </tbody>
                    
                </table>
            }
            
       </div>
       
       
       
   )
  

}

export default Wrapper;






const CustomTable = (props)=>(
    props.data.map((user,index) => (
        <tr key={index} className={index+1==props.activeRow?"bg-active":""}>
            <td>{user.userId}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
        </tr>
            
        )
    )
)