import gql from 'graphql-tag';

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: File!) {
    uploadFile(file: $file) {
      Key
      filename
      mimetype
      encoding
      filesize
    }
  }
`;
