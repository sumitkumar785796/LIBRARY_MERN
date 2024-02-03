import React, { useEffect, useState } from 'react'
import axios from "axios";
import SideBar from './SideBar'
import NavBar from './NavBar'
import Footer from './Footer'
import BookDataStore from './BookDataStore'
import { NavLink } from 'react-router-dom'
const BookView = () => {
    const [getBook, setBook] = useState([]);
    const [alert, setAlert] = useState({
        message: '',
        type: ''
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/bookview");
                setBook(res.data.message);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const deleteBook = async (id) => {
        try {
            const isConfirmed = window.confirm('Are you sure you want to delete this Book?')
            if (!isConfirmed) {
                return
            }
            const res1 = await axios.get(`/bookdelet/${id}`)
            setAlert({
                message: res1.data.message,
                type: 'success'
            })
            setTimeout(() => {
                setAlert([null])
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
                                <h4 className="page-title">View Books</h4>
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

                                    <h3 className="box-title">View Books</h3>
                                    Add Book<code style={{ color: 'red' }}><NavLink to="/bookEntry" className="text-muted">.Click Here</NavLink></code>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">#</th>
                                                    <th className="border-top-0">Book Name</th>
                                                    <th className="border-top-0">Class</th>
                                                    <th className="border-top-0">Department</th>
                                                    <th className="border-top-0">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    getBook.map((ele, index) => (
                                                        <BookDataStore
                                                            index={index}
                                                            key={ele.book_id}
                                                            id={ele.book_id}
                                                            name={ele.book_name}
                                                            department={ele.department}
                                                            student_class={ele.class}
                                                            deleteBook={() => deleteBook(ele.book_id)}
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

export default BookView;