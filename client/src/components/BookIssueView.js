import React, { useEffect, useState } from 'react'
import axios from "axios";
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import BookIssueDataStore from './BookIssueDataStore'
import { NavLink } from 'react-router-dom'
const BookIssueView = () => {
    const [getBookIssue, setBookIssue] = useState([]);
    const [alert,setAlert]=useState({
        message:'',
        type:''
    })
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("/bookissueview");
            setBookIssue(res.data.message);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
    }, []);
    const returnBook = async (id) =>{
        console.log(id)
        try {
            const isConfirmed = window.confirm('Are you sure you want to return book?')
            if(!isConfirmed){
                return
            }
            const res1 = await axios.post(`/bookissueupdate/${id}`)
            console.log(res1)
            setAlert({
                message:res1.data.message,
                type:'success'
            })
            setTimeout(()=>{
                setAlert([])
                window.location.reload()
            },2000)
            
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
                                <h4 className="page-title">View Book Issue Details</h4>
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
                            {
                                alert.message && (
                                    <div className={`alert alert-${alert.type}`} role='alert'>
                                        {alert.message}
                                    </div>
                                )
                            }
                                <div className="white-box">
                                    <h3 className="box-title">View Book Issue Details</h3>
                                    issue Books <code style={{color:'red'}}><NavLink to="/Booksissue" className="text-muted">.Click Here</NavLink></code>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">#</th>
                                                    <th className="border-top-0">Book Name</th>
                                                    <th className="border-top-0">Student Name</th>
                                                    <th className="border-top-0">Issue Date</th>
                                                    <th className="border-top-0">Due Date</th>
                                                    <th className="border-top-0">Return Date</th>
                                                    <th className="border-top-0">Late Fine</th>
                                                    <th className="border-top-0">Is Return</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                getBookIssue.map((ele,index)=>(
                                                    <BookIssueDataStore 
                                                        index={index}
                                                        key={ele.book_issue_id}
                                                        id={ele.book_issue_id}
                                                        name={ele.book_name} 
                                                        student_name={ele.student_name}
                                                        stud_id={ele.stud_id}
                                                        issue={ele.issue_date}
                                                        due={ele.due_date}
                                                        return_date={ele.return_date}
                                                        late={ele.late_fine}
                                                        is_submmited={ele.is_submmited}
                                                        returnBook={() => returnBook(ele.book_issue_id)}
                                                    />
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BookIssueView