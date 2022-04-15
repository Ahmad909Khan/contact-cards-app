import React from 'react';
import { useSelector } from 'react-redux';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const TableViewComponent = () => {

    const cardCollection = useSelector((state) => state.users.userCards)

    return (
        <div className="p-3 table-responsive my-5">
            <div className="my-3">
                <h3>List of users</h3>
            </div>
            <table className={homePageStyles.tableWidth + " table table-bordered table-hover"}>
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col" width='30%'>Address</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {cardCollection.map(({
                        firstName,
                        lastName,
                        designation,
                        contact_phone,
                        contact_email,
                        address_area,
                        address_city,
                        address_state,
                        address_country,
                        address_zipcode,
                        website
                    }, index) =>
                        <tr key={index}>
                            <th scope='row' className='text-center'>{index + 1}</th>
                            <td>
                                {firstName + ' ' + lastName}
                            </td>
                            <td>{designation}</td>
                            <td className='text-center'>{contact_phone}</td>
                            <td>{contact_email}</td>
                            <td>
                                <div>
                                    {
                                        address_area + ', '
                                        + address_city + ', '
                                        + address_state + ', '
                                        + address_country
                                    }
                                </div>
                                Zip Code: {address_zipcode}
                            </td>
                            <td>
                                <a href={'https://' + website} rel="noreferrer" target='_blank'>
                                    {website}
                                </a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableViewComponent