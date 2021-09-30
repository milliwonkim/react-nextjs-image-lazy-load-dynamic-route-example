import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TodosPage from './todos';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
