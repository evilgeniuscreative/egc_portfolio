import React from 'react';


const RegistrationTable = (props) => {    
    const { owner, locked, approved, created, expires, hasOwnershipToAccept, hasOwnerToApprove, type, consumer, consumerKey, consumerSecret, provider, description, parentKey } = props;
   
   
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // const [registrations, setRegistrations] = useState([]);
    // const [sortConfig, setSortConfig] = useState({ key:'1', direction: 'ascending' });

    // const sortTable = (key) => {
    //     const sortedData = [...registrations];
    //     if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
    //         sortedData.reverse();
    //         setSortConfig({ key, direction: 'descending' });
    //     } else {
    //         sortedData.sort((a, b) => {
    //             if (a[key] < b[key]) return -1;
    //             if (a[key] > b[key]) return 1;
    //             return 0;
    //         });
    //         setSortConfig({ key, direction: 'ascending' });
    //     }
    //     console.log(sortConfig );
    //     setRegistrations(sortedData);
    // };


    return (

<div style={{ marginTop: '100px' }}> 
    TABLE
               <div className="registration-table">
                <table>
                    <thead>
                        <th>
                            <tbody>
                                <tr>
                                    <td>Owner</td>
                                    <td>Locked</td>
                                    <td>Approved</td>
                                    <td>Created</td>
                                    <td>Expires</td>
                                    <td>+</td>
                                </tr>
                            </tbody>
                        </th>
                        </thead>
                        <tr>
                            <tbody>
                                <tr>
                                    <td>{owner}</td>
                                    <td>{locked}</td>
                                    <td>{approved}</td>
                                    <td>{created}</td>
                                    <td>{expires}</td>
                                    <td>
                                        {hasOwnerToApprove}
                                        {hasOwnershipToAccept}
                                        {type}
                                        {consumer}
                                        {consumerKey}
                                        {consumerSecret}
                                        {provider}
                                        {description}
                                        {parentKey}
                                    </td>
                                </tr>
                            </tbody>
                        </tr>
                </table>
            </div>
        </div>
        // <table className="coar-table">
        //     <thead>
        //     <tr>
        //         <th onClick={() => sortTable('owner')}>Owner</th>
        //         <th onClick={() => sortTable('created')}>Created</th>
        //         <th onClick={() => sortTable('expires')}>Expires</th>
        //         <th onClick={() => sortTable('type')}>Type</th>
        //         <th onClick={() => sortTable('description')}>Description</th>
        //     </tr>
        //     </thead>
        //     <tbody>
           
        
        //     {registrations.map((reg, index) => (
        //         <tr key={index}>
        //             <td>{reg.owner.map(owner => owner.cecId).join(', ')}</td>
        //             <td>{new Date(reg.created).toLocaleDateString()}</td>
        //             <td>{new Date(reg.expires).toLocaleDateString()}</td>
        //             <td>{reg.type}</td>
        //             <td>{reg.description}</td>
        //         </tr>
        //     ))}
        //     </tbody>
        // </table>
    );
};

export default RegistrationTable;