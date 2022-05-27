import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';

function useIsAuth() {

    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    // const { data: session, status } = useSession()


    useEffect(() => {

        const securePage = async () => {
            const session = await getSession()
            if (session) {
                setIsAuth(true)
                if (session.user.isAdmin) {
                    setIsAdmin(true)
                }
            }
        }
        securePage()
    }, [])

    console.log(isAuth)

    return [isAdmin, isAuth]
}

export default useIsAuth