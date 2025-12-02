'use client'
import React, { useState } from 'react'
import ViewTenderPage from './subpage/ViewTenderPage';
import AddTenderPage from './subpage/AddTenderPage';

const ManageTender = () => {

    const [addTender, setAddTender] = useState(false);
    const [tenders, setTenders] = useState([]);

    return (
        <div>
            {
                !addTender ?
                    <div>
                        <ViewTenderPage setAddTender={setAddTender} />
                    </div>
                    :
                    <div>
                        <AddTenderPage setAddTender={setAddTender} />
                    </div>
            }
        </div>
    )
}

export default ManageTender