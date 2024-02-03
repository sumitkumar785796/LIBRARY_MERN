import React, { useEffect, useState } from 'react'
import axios from "axios";
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import StudentDataStore from './StudentDataStore'
import { NavLink } from 'react-router-dom'
const ViewStudent = () => {
    const [getStudent, setStudent] = useState([]);
    const [alert, setAlert] = useState({
        message: '',
        type: ''
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/studview");
                setStudent(res.data.message);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const deleteStudent = async (id) => {
        try {
            const isConfirmed = window.confirm('Are you sure you want to delete this students?')
            if (!isConfirmed) {
                return
            }
            const res1 = await axios.get(`/studdel/${id}`)
            setAlert({
                message: res1.data.message,
                type: 'success'
            })
            setTimeout(() => {
                setAlert([])
                window.location.reload();
            }, 2000)
        } catch (error) {
            console.log(error)
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
                                <h4 className="page-title">View Student Details</h4>
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
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="white-box">
                                    {
                                        alert.message && (
                                            <div className={`alert alert-${alert.type}`} role='alert'>
                                                {alert.message}
                                            </div>
                                        )
                                    }
                                    <h3 className="box-title">View Student Details</h3>
                                    Add Student Details<code style={{ color: 'red' }}><NavLink to="/studentEntry" className="text-muted">.Click Here</NavLink></code>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">#</th>
                                                    <th className="border-top-0">Student Name</th>
                                                    <th className="border-top-0">Class</th>
                                                    <th className="border-top-0">Mobile</th>
                                                    <th className="border-top-0">Password</th>
                                                    <th className="border-top-0">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getStudent.map((ele, index) => (
                                                        <StudentDataStore
                                                            index={index}
                                                            key={ele.stud_id}
                                                            id={ele.stud_id}
                                                            name={ele.student_name}
                                                            student_class={ele.class}
                                                            mobile={ele.mobile}
                                                            password={ele.password}
                                                            deleteStudent={() => deleteStudent(ele.stud_id)}
                                                        />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* End PAge Content */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Right sidebar */}
                        {/* ============================================================== */}
                        {/* .right-sidebar */}
                        {/* ============================================================== */}
                        {/* End Right sidebar */}
                        {/* ============================================================== */}
                    </div>
                    {/* ============================================================== */}
                    {/* End Container fluid  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* footer */}
                    {/* ============================================================== */}
                    <Footer />
                    {/* ============================================================== */}
                    {/* End footer */}
                    {/* ============================================================== */}
                </div>
                {/* ============================================================== */}
                {/* End Page wrapper  */}
                {/* ============================================================== */}
            </div>

        </>
    )
}

export default ViewStudent