import axios from "axios";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export const saveContactme = async (data: ContactFormData) => {
    try {
        console.log("data: ", data);
        const response = await axios.post(`http://localhost:8080/api/v1/contact/save-contact`, data);
        return response.data;
    } catch (error: unknown) {
        console.error("Error adding financial report:", error);
        if (error instanceof Error) {
            return error.message;
        }
        return String(error);
    }
};