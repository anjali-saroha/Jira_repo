
import {Button,TaskList} from '../Components'
import {Link} from 'react-router-dom'

const Home = () => {
return(
    <div>
        <div className='buttoncontainer'>
         <Link to='/create'>
          <Button title='Create Task'/>
         </Link>
        </div>
        <div>
        <TaskList/>
        </div>
   </div>
)
}

export default Home