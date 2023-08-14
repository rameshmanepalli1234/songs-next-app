import React from "react";
import styles from './index.module.scss';
import Head from 'next/head';

const Bible: React.FC = () => {
    return (
        <div className={styles.homePageWrapper}>
            <Head>
                <title>YSPM MINISTRIES | BIBLE PAGE</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
        </div>
    )
}

export default Bible;