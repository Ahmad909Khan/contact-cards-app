import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchOperation } from '../../redux/actions/userActions';

const CommonTags = () => {
    const cardCollection = useSelector((state) => state.users.userCards);
    const dispatch = useDispatch();
    const tags = cardCollection.map((card) => card.tags);
    let combinedTagsArray = [];
    let count = {};
    tags.map((tag) => combinedTagsArray = [...combinedTagsArray, ...tag]);
    combinedTagsArray.map((tag) =>
        count[tag]
            ? count[tag]++
            : count[tag] = 1
    );

    const mostFrequentTags = Object.entries(count).sort((a, b) => b[1] - a[1]);
    console.log(mostFrequentTags)
    return (
        <>
            <div className="text-center p-3 border-3 border-bottom fst-italic">
                {mostFrequentTags.length > 0
                    ? mostFrequentTags.slice(0, 5).map((tag, index) =>
                        <span
                            className='cursorPointer position-relative mx-3 btn py-0 rounded-pill border-2 border'
                            key={index}
                            onClick={(event) => {
                                event.stopPropagation();
                                dispatch(searchOperation(tag[0], 'tags'));
                            }}>
                            <FontAwesomeIcon
                                className='me-2'
                                icon={faTag}
                                flip='horizontal'
                                size='lg'
                            />
                            {tag[0]}
                            <span
                                className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white'>
                                {tag[1]}
                            </span>
                        </span>)
                    : 'No tags found'}
            </div>
        </>

    )
}

export default CommonTags