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

// ************** sorting by Id **************


export function sortById(userdata, ascending) {
    const sortedData = [...userdata];
    if (ascending) {
        return sortedData.sort((a, b) => a.id - b.id);
    }
    return sortedData.sort((a, b) => b.id - a.id);
}

// ************** sorting by Age **************

export function sortByAge(userdata, ascending) {
    const sortedData = [...userdata];
    if (ascending) {
        return sortedData.sort((a, b) => a.age - b.age);
    }
    return sortedData.sort((a, b) => b.age - a.age);
}
// ************** Clear All Filters************** 

export function ClearAllFilters(userdata) {
    return [...userdata];
}

