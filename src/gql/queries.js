import gql from 'graphql-tag';

export const GET_AUTHENTICATED_USER = gql `
    query GET_AUTHENTICATED_USER_PROFILE {
        authUserProfile {
            id
            username
            avatarImage
            email
            lastName
            firstName
        }
    }
`

export const LOGIN_USER = gql `
    query AUTHENTICATE_USER(
        $username: String!
        $password: String!
    ){
        authenticateUser(
            username: $username, 
            password: $password
        ){
            user {
                id
                username
                avatarImage
                email
                lastName
                firstName
            }
            token
        }
    }
`;