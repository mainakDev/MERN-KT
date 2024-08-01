import React from 'react';
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taj Mahal',
        description: 'One of the 7 wonders of the world',
        imageUrl: 'https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat: '27.1751448',
            lng: '78.0395673'
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Charminar',
        description: 'Iconic four-arched mopsque and sumbol of Hyderabad',
        imageUrl: 'https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002',
        location: {
            lat: '17.3579279',
            lng: '78.4694445'
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return(
        <PlaceList items={loadedPlaces}/>
    );
}

export default UserPlaces
