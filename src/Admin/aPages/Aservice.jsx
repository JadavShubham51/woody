import React, { useEffect, useState } from "react";
import Aheader from "../acommon_component/Aheader";
import Afooter from "../acommon_component/Afooter";
import axios from "axios";

function Aservice() {
  useEffect(() => {
    fetch();
  }, []);

  const [data1, setdata1] = useState();

  //update data
  const [editingservice,seteditingservice] = useState(null);
  const [editedservice,seteditedservice] = useState({
    id:'',
        service_name:"",
        desc:"",
        imges:""
  })

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/service`);
    console.log(res.data);
    setdata1(res.data);
  };

  // delete function
  const deletehandle=async(id)=>{
    const res = await axios.delete(`http://localhost:3000/service/${id}`)
    fetch()
  }
  
  // update funtion
  const editService =(service)=>{
    seteditingservice(service)
    seteditedservice(service)
  }

  const SaveEditeService = async(e)=>{
    try{
      e.preventDefault();
      await axios.put(`http://localhost:3000/service/${editingservice.id}`,editedservice);
      fetch(); //refresh pachi
      seteditingservice(null)
    }
    catch(error)
    {
      console.error("Error editing service:",error)
    }
  }




  return (
    <div>
      <Aheader />
      <div className="container my-5">
        <h1 className="text-center">Manger service</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">service_name</th>
              <th scope="col">desc</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1 &&
              data1.map((value, index) => {
                return (
                  <tr>
                    <th scope="row" key={index}>
                      {value.id}
                    </th>
                    <td>{value.service_name}</td>
                    <td>{value.desc}</td>
                    <td>
                      <button className="btn btn-primary rounded-3">View</button>
                      <button className="btn btn-success rounded-3 mx-2" onClick={()=>editService(value)}>Edit</button>
                      <button className="btn btn-danger rounded-3" onClick={()=>deletehandle(value.id)}>Delete</button>
                    </td>
                  </tr> 
                );
              })}
          </tbody>
        </table>
        {
          editingservice && (
            <>
              <div
        className="col-lg-12 quote-text py-5 wow fadeIn"
        data-wow-delay="0.5s"
      >
        <div className="p-lg-5 pe-lg-0">
          <div className="section-title text-start">
            <h1 className="display-5 mb-4">Update Service</h1>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="add service"
                  style={{ height: 55 }}
                   
                    onChange={(e)=>seteditedservice({...editedservice,service_name:e.target.value})}
                    value={editedservice.service_name}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="url"
                  name="imges"
                  className="form-control border-0"
                  placeholder="Add Url"
                  style={{ height: 55 }}
                  onChange={(e)=>seteditedservice({...editedservice,imges:e.target.value})}
                    value={editedservice.imges}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0"
                  placeholder="Special Note"
                  defaultValue={""}
                  name="desc"
                  onChange={(e)=>seteditedservice({...editedservice,desc:e.target.value})}
                    value={editedservice.desc}
                />
              </div>
              <div className="row">
              <div className="col-6">
                <button className="btn btn-primary w-100 py-3" type="submit" onClick={SaveEditeService}>
                  update
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-primary w-100 py-3" type="submit" onClick={()=>{seteditingservice(null)}}>
                  cancel
                </button>
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
            </>
          )
        }
        

      </div>
      <Afooter />
    </div>
  );
}

export default Aservice;
