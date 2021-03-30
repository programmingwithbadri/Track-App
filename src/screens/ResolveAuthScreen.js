import { useContext, useEffect } from 'react'
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { isUserLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        isUserLoggedIn();
    }, [])

    return null;
}

export default ResolveAuthScreen;