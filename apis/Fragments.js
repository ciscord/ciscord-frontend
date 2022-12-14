import gql from 'graphql-tag';

export const MessagesFragment = gql`
  fragment message on Message {
    id
    body
    createdAt
    author {
      id
      username
      image
      role {
        color
      }
    }
    channel {
      url
      id
    }
    reactions {
      id
      name
      users {
        id
        username
        image
      }
    }
    children {
      id
      body
      createdAt
      author {
        id
        username
        image
        role {
          color
        }
      }
      attachments {
        id
        Key
        filename
        mimetype
        filesize
      }
      remoteAttachments {
        id
        siteName
        description
        title
        videoLink
        preview
        url
      }
    }
    attachments {
      id
      Key
      filename
      mimetype
      filesize
    }
    remoteAttachments {
      id
      siteName
      description
      title
      videoLink
      preview
      url
    }
  }
`;
