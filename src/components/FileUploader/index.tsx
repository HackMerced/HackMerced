import React, { FC, useRef } from "react";

import "./styles.scss";

const FileUploader: FC<any> = (props) => {
    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = () => {
        (hiddenFileInput as any).current.click();
    };

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file
    const handleChange = (event: any) => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <>
            <button
                id={props.id}
                onClick={handleClick}
                className={"upload-button " + props.className}
                name={props.name}
            >
                Upload Resume* (PDF only)
            </button>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: "none" }} />
        </>
    );
};

export default FileUploader;
