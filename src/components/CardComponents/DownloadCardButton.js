import React from 'react';
import html2canvas from 'html2canvas';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cardStyles from '../../assets/css/cardStyles.module.css';

const DownloadCardButton = (props) => {

    const downloadCard = () => {
        html2canvas(
            document.getElementById('cardToDownload'),
            {
                allowTaint: true
            }
        ).then((canvas) => {
            document.body.appendChild(canvas);
            let cardImage = document.querySelector('canvas');
            let anchor = document.createElement('a');
            cardImage.crossorigin = 'anonymous';
            anchor.href = cardImage.toDataURL('image/png');
            anchor.download = 'html2canvas.png';
        })
    }
    return (
        <span id='downloadButton' className="text-decoration-none text-dark" href=''>
            <FontAwesomeIcon
                className='cursorPointer'
                icon={faDownload}
                size='lg'
                onClick={downloadCard}
            />
            <div className='d-none'>
                <section id='cardToDownload'>
                    <div className={cardStyles.cardCSS + " px-3 py-2 my-3"}>
                        {props.cardFront}
                    </div>
                    <div className={cardStyles.cardCSS + " px-3 py-2 my-3"}>
                        {props.cardBack}
                    </div>
                </section>
            </div>
        </span>

    )
}

export default DownloadCardButton