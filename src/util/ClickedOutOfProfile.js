import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const useOutClick = (ref, setComponentIsOpen) => {
    useEffect(() => {

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setComponentIsOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setComponentIsOpen]);
}

const ClickedOut = (props) => {
    const { setComponentIsOpen } = props;
    const wrapperRef = useRef(null);
    useOutClick(wrapperRef, setComponentIsOpen);

    return <div ref={wrapperRef}>{props.children}</div>;
}

ClickedOut.propTypes = {
    children: PropTypes.element.isRequired
};

export default ClickedOut;