export const toDisplayStr = (data: unknown) => {
    if (typeof data === "string") {
        return data;
    } else {
        return JSON.stringify(data);
    }
};
