import React from 'react'
import Main from './components/Main'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './components/Error'
import StudentEntry from './components/StudentEntry'
import ViewStudent from './components/ViewStudent'
import BookEntry from './components/BookEntry'
import BookView from './components/BookView'
import BookIssueView from './components/BookIssueView'
import BookIssueEntry from './components/BookIssueEntry'
const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route exact path='/studentEntry' element={<StudentEntry/>} />
          <Route path='/studentEntry/:id' element={<StudentEntry/>} />
          <Route exact path='/viewstudent' element={<ViewStudent/>} />
          <Route exact path='/bookEntry' element={<BookEntry/>} />
          <Route path='/bookEntry/:id' element={<BookEntry/>} />
          <Route exact path='/BooksRead' element={<BookView/>} />
          <Route exact path='/Booksissue' element={<BookIssueEntry/>} />
          <Route exact path='/Readissue' element={<BookIssueView/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App