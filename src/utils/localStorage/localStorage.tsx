export const setStorage = (key: string, value: any) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + 300000,
    }
    localStorage.setItem(key, JSON.stringify(item));
}

export const getStorage = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null
    };
    const item = JSON.parse(itemStr);
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null;
    }
    return item.value;
}