export function useQueue() {
  const [queueData, setQueueData] = useState([]);

  const addDataToQueue = (newData) => {
    setQueueData((prevData) => [
      ...prevData,
      { ...newData, id: crypto.randomUUID(), status: "waiting" },
    ]);
  };

  const updateUserStatus = (id, newStatus) => {
    setQueueData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, status: newStatus } : data,
      ),
    );
  };

  const deleteUserData = (id) => {
    setQueueData((prevData) => prevData.filter((data) => data.id !== id));
  };


  return {queueData,setQueueData,addDataToQueue,updateUserStatus,deleteUserData};
}
