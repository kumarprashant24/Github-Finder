
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GitUsers() {
    const [userData, setData] = useState([]);
    useEffect(() => {
        loaduser();
    }, [])
    const loaduser = async () => {
        const result = await axios.get("https://api.github.com/users");
        setData(result.data)
        console.log(result.data);
    }

    const onhandleChange = (e)=>{
        userData.map((element, index) => {
            if (element.login.toUpperCase().indexOf((e.target.value).toUpperCase()) != -1) {
              document.getElementById(index).style.display = "";
      
            }
            else {
              document.getElementById(index).style.display = "none";
            }
      
          })
    }
    return (
        <div className='container'>
            <input className="form-control me-2 mt-5" onChange={(e)=>onhandleChange(e)} type="search" placeholder="Search" aria-label="Search"/>
  

            <div className="row mt-5">
                {userData.map((element,index) => (
                    <div className="col-md-3 mt-2" id={index} key={element.id}>
                        <div className="card " >
                            <img src={element.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center fw-bolder">{element.login}</p>
                            </div>
                        </div>
                    </div>


                ))}
            </div>






        </div>
    )
}
