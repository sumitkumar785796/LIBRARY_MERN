import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import { NavLink, useParams } from 'react-router-dom'

const StudentEntry = () => {
  const [getstudCount, setstudCount] = useState([])
  const [getStudentEntey, setStudentEntry] = useState({
    student_name: '',
    student_class: '',
    mobile: '',
    password: ''
  })
  const [alert, setAlert] = useState({
    message: '',
    type: '',
  })
  const initialFormState = {
    student_name: '',
    student_class: '',
    mobile: '',
    password: '',
  }
  const resetFormFields = () => {
    setStudentEntry(initialFormState);
  }
  const handleError = (error) => {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.errors) {
        setErrorMessages(responseData.errors.map((error) => error.msg));
      } else if (responseData.message) {
        setErrorMessages([responseData.message]);
      } else {
        setErrorMessages(['An error occurred while submitting the data. Please try again later.']);
      }
      setTimeout(() => {
        setErrorMessages([]);
      }, 3000);
    } else if (error.request) {
      setErrorMessages(['No response received from the server']);
    } else {
      setErrorMessages(['Error setting up the request']);
    }
    console.error('Error:', error);
  }
  const [errorMessages, setErrorMessages] = useState([]);
  const setRecord = (e) => {
    const { name, value } = e.target
    setStudentEntry((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  const saveData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/studinsert', getStudentEntey);
      setAlert({
        message: response.data.message,
        type: 'success',
      });
      setTimeout(() => {
        setAlert([]);
      }, 2000);
      // Reset form fields after successful submission
      resetFormFields();
    } catch (error) {
      handleError(error);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/totalstudent")
        setstudCount(res.data.message)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])
  const { id } = useParams('')
  const getData = useCallback(async () => {
    try {
      const res1 = await axios.get(`/studdsingleview/${id}`)
      const userData = res1.data.message[0];
      setStudentEntry(userData)
    } catch (error) {
      console.log(error)
    }
  }, [id])
  useEffect(() => {
    getData();
  }, [getData, id]);
  const updateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/studupdate/${id}`, getStudentEntey);
      setAlert({
        message: response.data.message,
        type: 'success',
      });
      console.log(response)
      setTimeout(() => {
        setAlert([]);
      }, 2000);
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <>
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
        <SideBar />
        <NavBar />
        <div className="page-wrapper">
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">{id ? 'Update' : 'Add'} Student Details</h4>
              </div>
              <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <div className="d-md-flex">
                  <ol className="breadcrumb ms-auto">
                    <li><NavLink to="/" className="fw-normal">Dashboard</NavLink></li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.col-lg-12 */}
          </div>
          <div className="container-fluid">
            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-4 col-xlg-3 col-md-12">
                <div className="white-box">
                  <div className="user-bg"> <img width="100%" alt="user" src="../lbicon.png" />
                    <div className="overlay-box">
                      <div className="user-content">
                        <img src="../usericon.png" width="100" className="thumb-lg img-circle" alt="img" />
                        <h4 className="text-white mt-2">Total Student</h4>
                      </div>
                    </div>
                  </div>
                  <div className="user-btm-box mt-5 d-md-flex">
                    <div className="col-md-12 col-sm-12 text-center">
                      <h1>
                        {getstudCount.map((ele, index) => (
                          <div key={index}>{ele.count}</div>
                        ))}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="col-lg-8 col-xlg-9 col-md-12">
                <div className="card">
                  <div className="card-body">
                    {/* Display alert message */}
                    {alert.message && (
                      <div className={`alert alert-${alert.type}`} role="alert">
                        {alert.message}
                      </div>
                    )}
                    {/* Display error messages */}
                    {errorMessages.length > 0 && (
                      <div className="btn btn-danger">
                        <ul>
                          {errorMessages.map((message, index) => (
                            <li key={index}>{message}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0" htmlFor="stname">Student Name</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input type="text" placeholder="Enter Student Name" className="form-control p-0 border-0" onChange={setRecord} value={getStudentEntey?.student_name} name="student_name" id="stname" /> </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="class" className="col-md-12 p-0">Class</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input type="text" placeholder="Enter Your class name" className="form-control p-0 border-0" name="student_class" id="class" value={getStudentEntey?.student_class} onChange={setRecord} />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0" htmlFor="mobile">Mobile No</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input type="number" placeholder="Enter 10 digit mobile number" className="form-control p-0 border-0" name="mobile" id="mobile" value={getStudentEntey?.mobile} onChange={setRecord} />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label className="col-md-12 p-0" htmlFor="password">Password</label>
                      <div className="col-md-12 border-bottom p-0">
                        <input type="password" placeholder='Enter Your Password' className="form-control p-0 border-0" name="password" id="password" value={getStudentEntey?.password} onChange={setRecord} />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="col-sm-12">
                        <button className="btn btn-success" onClick={id ? updateData : saveData} >
                          {id ? 'Update' : 'Save'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
            </div>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentEntry