import React from 'react'

import UserItem from './UserItem';
import Card from '../../shared/UIElements/Card';
import './UserList.css'

const UserList = props => {
    if(props.items.length === 0){
        return(
            <div className='center'>
                <Card>
                    <h2>No user exists</h2>
                </Card>
            </div>
        );    
    }
    return(
        <ul>
            {props.items.map(user => {
                return (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />
                );
            })}
        </ul>
    );
}

export default UserList
