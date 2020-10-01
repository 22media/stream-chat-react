// @ts-check
import React, { useContext } from 'react';
// @ts-ignore
import { ChannelContext } from '../../context';

/** @type {React.FC<import("types").MessageInputUploadsProps>} */
const UploadsPreview = ({
  imageOrder,
  imageUploads,
  removeImage,
  uploadImage,
  uploadNewFiles,
  numberOfUploads,
  fileOrder,
  fileUploads,
  removeFile,
  uploadFile,
}) => {
  const channelContext = useContext(ChannelContext);
  return (
    <>
    </>
  );
};

export default UploadsPreview;
