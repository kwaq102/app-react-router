import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';

// permission - pozwolenie
const permission = false

const AdminPage = () => {
    return (
        <Route render={() => (
            permission ? <h3>Panel admina - dzień dobry</h3> : <Redirect to="/login" />
        )} />

    );
}

export default AdminPage;