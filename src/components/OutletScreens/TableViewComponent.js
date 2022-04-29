import React from 'react';
import { useSelector } from 'react-redux';
import UserRow from '../TableComponents/UserRow';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const TableViewComponent = () => {

    const cardCollection = useSelector((state) => state.users.userCards);
    const { searchTerm, searchResults } = useSelector((state) => state.users);

    return (
        <div className="p-3 table-responsive my-3">
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
                        <th scope="col">Address</th>
                        <th scope="col">Website</th>
                        <th scope="col">Tags</th>
                        <th colSpan="2" className="text-center" width='10%'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {searchTerm
                        ? searchResults.length > 0
                            ? searchResults.map((card, index) =>
                                <UserRow card={card} index={index} key={index} />)
                            : <tr>
                                <td colspan="10" className="text-center">
                                    No Users found
                                </td>
                            </tr>
                        : cardCollection.length > 0
                            ? cardCollection.map((card, index) =>
                                <UserRow card={card} index={index} key={index} />)
                            : <tr>
                                <td colSpan="10" className="text-center">
                                    No User Data Available
                                </td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableViewComponent