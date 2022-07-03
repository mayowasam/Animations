import { Navigate } from 'react-router-dom';
import {useStateVal} from '../import'

function ProtectedRoute({ children }) {
    const {user} = useStateVal()
    // console.log(user);


  return user && (user!== undefined) ? children : <Navigate to="/" />
}

export default ProtectedRoute;
