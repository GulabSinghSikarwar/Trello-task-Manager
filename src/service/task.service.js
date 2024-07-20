import axios from "axios";
import { applicationUrls } from '../component/utils/applicationUrls'

export const createTask = async (body) => {
    const url = applicationUrls.createTask
    console.log(" url : ", url);
    const response = await axios.post(url, body);
    console.log("resp : ", response);
    return response
}
export const fetchTaskStatus = async (userId) => {
    const url = applicationUrls.allTaskStatus(userId)
    const response = await axios.get(url);
    return response
}

