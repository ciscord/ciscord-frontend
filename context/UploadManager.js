import { useState, createContext, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

const UploadManagerContext = createContext({
  uploadQueue: [],
});

UploadManagerContext.displayName = 'UploadManager';

const UploadManagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [uploadQueue, setUploadQueue] = useState([]);

  const [maxSteps, setMaxStep] = useState(0);
  const [sendMessageStatus, setSendMessageStatus] = useState({
    label: '',
    step: 0,
  });

  const upload = async () => {
    const nextUpload = uploadQueue[0];
    if (nextUpload && !loading) {
      setLoading(true);
      setMaxStep(nextUpload.data.attachments.length + 4);
      setSendMessageStatus({ label: 'Message processing', step: 1 });

      const uploadList = nextUpload.data.attachments.map(async file => {
        const url = `https://54.147.200.132/graphql/presign`;
        const filename = uuid().slice(0,8) + file.name;
        const params = new URLSearchParams({
          key: filename,
        });
        let resp = await fetch(url, {
          method: "POST",
          body: params,
        });
        let presignResp = await resp.json();

        resp = await fetch(presignResp.url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
          },
          body: file,
        });

        if (filename) {
          setSendMessageStatus(({ step }) => ({
            label: `${step - 2} / ${nextUpload.data.attachments.length}`,
            step: step + 1,
          }));
        }

        return filename;
      });

      setSendMessageStatus({ label: 'File uploading', step: 2 });

      const sendMessage = async () => {
        const filesUrlList = await Promise.all(uploadList);
        setSendMessageStatus(({ step }) => ({
          label: 'Message sending',
          step: step + 1,
        }));

        await nextUpload.onSendMessage(filesUrlList);
        setSendMessageStatus({
          label: 'Success',
          step: setSendMessageStatus.step + 1,
        });

        setMaxStep(0);
        setSendMessageStatus({
          label: '',
          step: 0,
        });
        setUploadQueue(currentQueue => currentQueue.slice(1));
        setLoading(false);
      };

      sendMessage();
    }
  }
  useEffect(() => {
    upload()
  }, [uploadQueue.length, loading]);

  const addUploadToQueue = useCallback(uploadItem => {
    setUploadQueue(currentQuery => [...currentQuery, uploadItem]);
  }, []);

  return (
    <UploadManagerContext.Provider
      value={{
        uploadQueue,
        addUploadToQueue,
        uploadProgress: {
          maxSteps,
          ...sendMessageStatus,
        },
      }}
    >
      {children}
    </UploadManagerContext.Provider>
  );
};

export { UploadManagerProvider as default, UploadManagerContext };
