// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "This is the content for post 1",
        author: "John Doe",
        date: "2022-03-20T10:00:00Z",
      },
      {
        id: 2,
        title: "Post 2",
        content: "This is the content for post 2",
        author: "Jane Doe",
        date: "2022-03-22T08:30:00Z",
      },
      {
        id: 3,
        title: "Post 3",
        content: "This is the content for post 3",
        author: "John Doe",
        date: "2022-03-23T13:15:00Z",
      },
    ],
  });
}
