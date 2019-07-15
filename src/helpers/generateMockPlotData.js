const generateMock = (offset, factor = 1, length = 30) => {
    // const now = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    const tsToHoursAndMinutes = timestamp => {
        const date = new Date();
        date.setTime(timestamp);
        return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
    const labels = Array.from(Array(length), (x, index) => tsToHoursAndMinutes(Date.now() - 60000*index)).reverse();
    // const data = Array.from(Array(30), (x, index) => Math.floor(Math.random() * 10)+4);
    const data = Array.from(Array(length), (x, index) => offset + Math.random() * factor);

    return { labels, data }
};

export default generateMock;
