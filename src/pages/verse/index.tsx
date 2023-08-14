import React from "react";
import styles from './index.module.scss';
import Head from 'next/head';

const Verse: React.FC = () => {
    return (
        <div className={styles.homePageWrapper}>
            <Head>
                <title>YSPM MINISTRIES | DAILY VERSE PAGE</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
        </div>
    )
}

export default Verse;