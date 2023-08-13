import React from "react";
import styles from './index.module.scss';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <div className={styles.homePageWrapper}>
            <Head>
                <title>YSPM MINISTRIES | HOME PAGE</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
        </div>
    )
}

export default Home;