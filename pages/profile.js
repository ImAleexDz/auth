import React, { useState } from 'react';
import { getUserProfile } from '../lib/auth';
import Layout from '../components/Layout'

const profile = () => {

    const [state, setState] = useState({
        user: null
    });

    getUserProfile().then(user => setState({ user }));
    

    return (
        <Layout title="Profile">
            <pre>
                {JSON.stringify(state.user, null, 2 )}
            </pre>
        </Layout>
    )
}

export default profile
