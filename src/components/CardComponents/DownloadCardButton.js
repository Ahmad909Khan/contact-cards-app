import React, { useCallback } from 'react';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownloadCardButton = (props) => {

    const { username, cardSide } = props;

    const downloadCard = useCallback(async () => {
        const canvas = await html2canvas(
            document.getElementById(`${username}`),
            {
                allowTaint: true,
                useCORS: true,
            }
        );
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, `${username}_card_${cardSide}.png`, 'image/png');
    }, [username, cardSide]);

    return (
        <FontAwesomeIcon
            className='cursorPointer my-1'
            icon={faDownload}
            size='lg'
            onClick={downloadCard}
        />
    )
}

export default DownloadCardButton