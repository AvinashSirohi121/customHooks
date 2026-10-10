
import React from "react";

const QueueDisplay = ({
  queueData,
  updateUserStatus,
  deleteUserData,
}) => {
  const styles = {
    card: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5eaf2",
      borderRadius: "16px",
      padding: "26px",
      boxShadow: "0 4px 18px rgba(24, 39, 75, 0.04)",
      minWidth: 0,
    },
    headingRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
      marginBottom: "8px",
    },
    heading: {
      margin: 0,
      fontSize: "19px",
      fontWeight: "750",
      color: "#172b4d",
    },
    count: {
      backgroundColor: "#edf2ff",
      color: "#2447a8",
      padding: "6px 11px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "700",
    },
    description: {
      margin: "0 0 24px",
      fontSize: "13px",
      color: "#718096",
      lineHeight: "1.6",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
      padding: "18px",
      border: "1px solid #e8edf4",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
    },
    customer: {
      display: "flex",
      alignItems: "center",
      gap: "13px",
      minWidth: 0,
      flex: "1 1 180px",
    },
    avatar: {
      width: "44px",
      height: "44px",
      minWidth: "44px",
      borderRadius: "12px",
      backgroundColor: "#edf2ff",
      color: "#2447a8",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "17px",
      fontWeight: "750",
    },
    name: {
      margin: "0 0 6px",
      fontSize: "14px",
      fontWeight: "700",
      color: "#172b4d",
      overflowWrap: "anywhere",
    },
    service: {
      margin: 0,
      fontSize: "12px",
      color: "#718096",
      textTransform: "capitalize",
    },
    actions: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "8px",
    },
    empty: {
      textAlign: "center",
      padding: "48px 16px",
      border: "1px dashed #d5deeb",
      borderRadius: "12px",
      backgroundColor: "#fafcff",
    },
    emptyIcon: {
      fontSize: "32px",
      marginBottom: "12px",
    },
    emptyTitle: {
      margin: "0 0 8px",
      fontSize: "15px",
      fontWeight: "700",
      color: "#344563",
    },
    emptyText: {
      margin: 0,
      fontSize: "13px",
      color: "#8793a5",
      lineHeight: "1.6",
    },
  };

  const getStatusStyle = (status) => {
    const statusStyles = {
      waiting: {
        backgroundColor: "#fff4db",
        color: "#9a6700",
      },
      "in-progress": {
        backgroundColor: "#e8f2ff",
        color: "#175cd3",
      },
      completed: {
        backgroundColor: "#e5f7ed",
        color: "#16804a",
      },
    };

    return {
      ...statusStyles[status],
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 10px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: "750",
      whiteSpace: "nowrap",
    };
  };

  const primaryButton = {
    padding: "9px 12px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#2447a8",
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "650",
    cursor: "pointer",
  };

  const successButton = {
    ...primaryButton,
    backgroundColor: "#16804a",
  };

  const deleteButton = {
    padding: "9px 12px",
    border: "1px solid #f2d5d5",
    borderRadius: "7px",
    backgroundColor: "#fff5f5",
    color: "#c53030",
    fontSize: "12px",
    fontWeight: "650",
    cursor: "pointer",
  };

  return (
    <section style={styles.card}>
      <div style={styles.headingRow}>
        <h2 style={styles.heading}>Customer Queue</h2>
        <span style={styles.count}>
          {queueData.length} {queueData.length === 1 ? "CUSTOMER" : "CUSTOMERS"}
        </span>
      </div>

      <p style={styles.description}>
        Monitor incoming requests and manage each customer's service lifecycle.
      </p>

      {queueData.length > 0 ? (
        <div style={styles.list}>
          {queueData?.map((data) => (
            <div style={styles.item} key={data.id}>
              <div style={styles.customer}>
                <div style={styles.avatar}>
                  {data.userName.charAt(0).toUpperCase()}
                </div>

                <div style={{ minWidth: 0 }}>
                  <p style={styles.name}>{data.userName}</p>
                  <p style={styles.service}>
                    {data.userService.replace("-", " ")}
                  </p>

                  <div style={{ marginTop: "10px" }}>
                    <span style={getStatusStyle(data.status)}>
                      {data.status === "waiting"
                        ? "● Waiting"
                        : data.status === "in-progress"
                        ? "● In Progress"
                        : "● Completed"}
                    </span>
                  </div>
                </div>
              </div>

              <div style={styles.actions}>
                {data.status === "waiting" && (
                  <button
                    style={primaryButton}
                    onClick={() => updateUserStatus(data.id, "in-progress")}
                  >
                    Attend
                  </button>
                )}

                {data.status === "in-progress" && (
                  <button
                    style={successButton}
                    onClick={() => updateUserStatus(data.id, "completed")}
                  >
                    Mark Completed
                  </button>
                )}

                <button
                  style={deleteButton}
                  onClick={() => deleteUserData(data.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.empty}>
          <div style={styles.emptyIcon}>▤</div>
          <h3 style={styles.emptyTitle}>Your queue is empty</h3>
          <p style={styles.emptyText}>
            No customer requests have been registered yet.
            <br />
            Use the registration form to add your first customer.
          </p>
        </div>
      )}
    </section>
  );
};

export default QueueDisplay;
