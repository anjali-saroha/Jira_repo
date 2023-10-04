import {Routes,Route} from 'react-router-dom'
import Home from './Container/Home'
import {AddTask,TaskDetail} from './Components'

const CustomRoute = () => {
  return(
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/create' element={<AddTask/>}/>
        <Route path="/edit/:id" element={<AddTask/>} />
        <Route path="/task/:id" element={<TaskDetail/>} />
    </Routes>
  )
}
export default CustomRoute