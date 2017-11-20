export default `
  type Tweet {
    _id: String
    text: String
  }

  type Query {
    getTweet(_id: ): Tweet 
    getTweets: [  ]
  }

  schema {
    query: Query
  }
`;
