import axios from "axios";

// const API_URL = "https://localhost:44365/";
const API_URL = "https://beloved-voice.ru:50000/";
const RECOGNIZE_WITHOUT_GRAMMAR_URL = "api/Recognize/recognize";

export const recognizeWithoutGrammarRequest = async (uri) => {
    const headers = {
        Authorization: "demo_token",
        "Content-Type": "multipart/form-data",
    };

    try {
        const formData = new FormData();
        // const rp = await fetch(uri);
        // const blob = await rp.blob();
        formData.append("file", {
            name: "file",
            uri: uri,
            type: "audio/x-wav",
        });
        formData.append("lang", "");
        // console.log(blob);
        const result = await axios.post(`${API_URL}${RECOGNIZE_WITHOUT_GRAMMAR_URL}`, formData, {
            headers: headers,
        });
        return result.data.data;
    } catch (ex) {
        console.log(ex);
        // return ex.message;
        return "Try again :(";
    }
};
