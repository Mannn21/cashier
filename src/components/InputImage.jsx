"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiUploadOutline } from "@mdi/js";
import { Modal, Upload } from "antd";
const getBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
const UploadIcon = () => {
	return <Icon path={mdiUploadOutline} size={1} />;
};
const InputImage = ({handleImage}) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");
	const [fileList, setFileList] = useState([]);
	const handleCancel = () => setPreviewOpen(false);
	const handlePreview = async file => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewOpen(true);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
		);
	};
	const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    handleImage(newFileList[0].originFileObj)
  }
	const uploadButton = (
		<button
			className="border-none bg-none flex flex-col justify-center items-center"
			type="button">
			<UploadIcon />
			<div className="mt-2">Upload</div>
		</button>
	);
	return (
		<div className="w-auto h-auto flex flex-row justify-center items-center">
			<Upload
				action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
				listType="picture-card"
				fileList={fileList}
				className=" flex justify-center items-center"
				onPreview={handlePreview}
				onChange={handleChange}>
				{fileList.length >= 1 ? null : uploadButton}
			</Upload>
			<Modal
				open={previewOpen}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}>
				<Image alt="example" width={200} height={300} src={previewImage} />
			</Modal>
		</div>
	);
};
export default InputImage;
