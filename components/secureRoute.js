import { getSession } from 'next-auth/react';
import Router from 'next/router';

function SecureRoute() {

    const securePage = async () => {

        const session = await getSession();

        if (!session) {
            return Router.push("/")
        }

        if (!session.user.isAdmin) {
            return Router.push("/")
        }
    }
    securePage();
}

export default SecureRoute