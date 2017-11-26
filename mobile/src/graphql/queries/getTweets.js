import { gql } from 'react-apollo'

export default gql`
  {
    getTweets{
      text
      _id
      favoriteCount
      createdAt
      user{
        username
        avatar
        lastName
        firstName
      }
    }
  }
`