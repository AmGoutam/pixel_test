// ************** sorting using by gender and city **************
export function sortingAll(userdata, filertItem) {
    if (filertItem.gender === '' && filertItem.city === '') {
        return userdata;
    } else if (filertItem.gender === "" || filertItem.city === "") {
        return userdata.filter((user) => user.gender === filertItem.gender || user.address.city === filertItem.city)
    }
    return userdata.filter((user) => user.gender === filertItem.gender && user.address.city === filertItem.city)
}

// ************** sorting by Name **************

export function sortByName(userdata, ascending) {
    const sortedData = [...userdata];
    if (ascending) {
        return sortedData.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
    return sortedData.sort((a, b) => b.firstName.localeCompare(a.firstName));
}

// ************** sorting by Id And Age**************


export function sortByIdAndAge(userdata, ascending, value) {
    const sortedData = [...userdata];
    if (ascending) {
        return sortedData.sort((a, b) => a[value] - b[value]);
    }
    return sortedData.sort((a, b) => b[value] - a[value]);
}

// ************** Clear All Filters **************

export function ClearAllFilters(userdata) {
    return [...userdata];
}

