import React from 'react';
import { useDispatch } from 'react-redux';
import { searchOperation } from '../../redux/actions/userActions';
import cardStyles from '../../assets/css/cardStyles.module.css'

const TagsList = (props) => {
    const { tags } = props;
    const dispatch = useDispatch();
    return (
        <span>
            {tags.length > 0
                ? tags.map((tag, index) =>
                    <span
                        className={cardStyles.cursorPointer}
                        key={index}
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch(searchOperation(tag, 'tags'));
                        }}>
                        {tag}{index !== tags.length -1 ? ', ' : ''}
                    </span>)
                : ''}
        </span>
    )
}

export default TagsList