import {useContext} from 'react'
import { AuthContext } from '../Contexts/AuthProvider';
const UseAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default UseAuth;
