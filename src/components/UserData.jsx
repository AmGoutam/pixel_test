import React from 'react';

const UserData = ({ user }) => {
    // Destructuring all data from user
    const { id, image, firstName, maidenName, lastName, address: { city, country }, company: { department }, gender, age } = user;

    return (
        <tr>
            <td>{id}</td>
            <td>
                <img src={image} width={30} height={30} alt={`${firstName} ${lastName}`} />
            </td>
            <td>{firstName} {maidenName} {lastName}</td>
            <td>{gender[0].toUpperCase()}/{age}</td>
            <td>{department}</td>
            <td>{city}, {country}</td>
        </tr>
    );
};

export default UserData;
