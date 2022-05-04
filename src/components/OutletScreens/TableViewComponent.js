import React from 'react';
import { useSelector } from 'react-redux';
import { utils, write, writeFile } from 'xlsx';
import UserRow from '../TableComponents/UserRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const TableViewComponent = () => {

    const cardCollection = useSelector((state) => state.users.userCards);
    const { searchTerm, searchResults } = useSelector((state) => state.users);
    const downloadData = () => {
        const workBook = utils.book_new();
        const filteredData = cardCollection.map((row) => {
            delete row.imageURL;
            delete row.isFavourite;
            return {
                ...row,
                tags: row.tags.join(', ')
            };
        })
        const workSheet = utils.json_to_sheet(filteredData);
        utils.book_append_sheet(workBook, workSheet, 'users');
        let buffer = write(workBook, { bookType: 'xlsx', type: 'buffer' });
        write(workBook, { bookType: 'xlsx', type: 'binary' });

        writeFile(workBook, 'usersData.xlsx')
    }

    return (
        <div className="p-3 table-responsive my-3">
            <div className="my-3 clearfix">
                <h3 className='float-start'>List of users</h3>
                <FontAwesomeIcon
                    className='mx-2 float-end mx-4 cursorPointer p-2 btn btn-lg btn-warning'
                    title='Download Data'
                    icon={faDownload}
                    onClick={downloadData} />
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