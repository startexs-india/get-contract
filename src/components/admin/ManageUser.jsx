'use client'
import React, { useState } from 'react'
import ViewUserPage from './subpage/ViewUserPage';
import AddUserPage from './subpage/AddUserPage';

const ManageUser = () => {
    const [addUserPage, setAddUserPage] = useState(false);
    return (
        <div>
            {
                !addUserPage ?
                    <div>
                        <ViewUserPage setAddUserPage={setAddUserPage} />
                    </div> :
                    <div>
                        <AddUserPage setAddUserPage={setAddUserPage} />
                    </div>
            }
        </div>
    )
}

export default ManageUser