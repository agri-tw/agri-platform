import { ref } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { firebaseStorageUrl } from "../../constants/firebase";
import { firebaseStorage } from "./instances";

type imageStorageType = keyof typeof firebaseStorageUrl.images;

export const getImageStorageDirectoryRef = (type: imageStorageType) =>
    ref(firebaseStorage, `${firebaseStorageUrl.images[type]}`);

export const generateImageStorageRef = (type: imageStorageType) =>
    ref(firebaseStorage, `${firebaseStorageUrl.images[type]}/${uuidv4()}`);
