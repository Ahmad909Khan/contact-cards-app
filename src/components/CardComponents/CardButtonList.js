import React, { useState } from 'react';
import FavouriteButton from './FavouriteButton';
import EditButton from './EditButton';
import ShareButton from './ShareButton';
import DownloadCardButton from './DownloadCardButton';
import PrintButton from './PrintButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan as farTrashCan } from '@fortawesome/free-regular-svg-icons';

const CardButtonList = (props) => {

    const {
        card,
        isFavourite,
        cardSide,
        flipCard,
        setDeleteCardMode
    } = props;
    const uuid = card.uuid;
    const [extraButtonsView, setExtraButtonsView] = useState(false);

    const actionButtons = <>
        <li>
            <FavouriteButton uuid={uuid} isFavourite={isFavourite} />
        </li>
        <li>
            <EditButton uuid={uuid} cardToEdit={card} />
        </li>
        <li>
            <FontAwesomeIcon className={'cursorPointer text-dark my-1'}
                size='lg'
                icon={farTrashCan}
                title='Delete this card'
                onClick={(event) => {
                    event.stopPropagation();
                    setDeleteCardMode(true);
                }} />
        </li>
    </>

    const exportButtons = <>
        <li>
            <ShareButton username={card.username} />
        </li>
        <li>
            <DownloadCardButton username={card.username} cardSide={cardSide} />
        </li>
        <li>
            <PrintButton username={card.username} cardSide={cardSide} />
        </li>
    </>

    return (
        <ul className="list-unstyled mx-2">
            <li>
                <FontAwesomeIcon
                    className='cursorPointer my-1'
                    size='lg'
                    icon={faRepeat}
                    onClick={flipCard}
                    title='Flip this card'
                />
            </li>
            {!extraButtonsView ? actionButtons : exportButtons}
            <li>
                <FontAwesomeIcon
                    className='cursorPointer my-1'
                    icon={extraButtonsView ? faChevronUp : faChevronDown}
                    onClick={() => setExtraButtonsView(prev => !prev)}
                    title='Other actions'
                />
            </li>
        </ul>
    )
}

export default CardButtonList