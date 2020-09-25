import gql from 'graphql-tag';

export const UPLOAD_IMAGE = gql `
    mutation UPLOAD_FILE($file: Upload!) {
        imageUploader(file: $file)
    }
`;

export const REGISTER_USER = gql `
    mutation REGISTER_NEW_USER(
        $email: String!
        $lastName: String!
        $username: String!
        $password: String!
        $firstName: String!
        $avatarImage: String
    ) {
    registerUser(
        newUser: {
        email: $email
        username: $username
        lastName: $lastName
        password: $password
        firstName: $firstName 
        avatarImage: $avatarImage
        }
    ) {
        token
        user {
                id
                email
                lastName
                username
                firstName
                avatarImage
                avatarImage
            }
        }
    }
`;