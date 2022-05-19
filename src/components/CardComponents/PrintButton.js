import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import html2canvas from 'html2canvas';
import React, { useCallback } from 'react'

const PrintButton = (props) => {

    const username = props.username;

    const printCard = useCallback(async () => {
        const canvas = await html2canvas(
            document.getElementById(`${username}`),

        );
        const dataURL = canvas.toDataURL('image/png');
        var printWindow = window.open();
        printWindow.document.write("<br><img src = '" + dataURL + "'/>")
        setInterval(() => printWindow.print(), 1000);
        // printWindow.print();
    }, [username]);

    return (
        <FontAwesomeIcon
            className='cursorPointer my-1'
            icon={faPrint}
            size='lg'
            onClick={printCard}
        />
    )
}

export default PrintButton