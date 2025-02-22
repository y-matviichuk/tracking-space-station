import React from 'react'
import styles from './PeopleInSpace.module.css'
import { useISSContext } from '../../hooks/useISSContext';
import PeopleList from './PeopleList/PeopleList';

const PeopleInSpace: React.FC = () => {
    const { crew, isLoading, error } = useISSContext();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading location data: {error.message}</div>;
    }

    if (!crew) {
        return <div>No crew data available</div>;
    }

    return (
        <div className={styles.container}>
            <PeopleList crew={crew} />
            <div className={styles.totalAmount}>Total amount: {crew.length} people on ISS</div>
        </div>
    )
}

export default PeopleInSpace