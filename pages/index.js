import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link'

const index = () => {
    return (
        <Layout title="Home">
            <Link href="/profile">
                <a>Go to profile</a>
            </Link>
        </Layout>
    )
}

export default index
