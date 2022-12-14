

export const formateValue = (value: any) => {
    const entries = Object.entries(value);
    // console.log('User data: ', JSON.stringify(entries));
    const newValue = entries.map((item) => {
        // console.log('item: ', item);
        return { ...item[1], ...{ id: item[0] } }
        // return item[1] 
    })
    return newValue
};