
import React, { useState } from "react";

const QueueForm = ({ addDataToQueue }) => {
  const [userName, setUserName] = useState("");
  const [userService, setUserService] = useState("");

  const addUserToQueue = (e) => {
    e.preventDefault();
    if (!userName.trim() || !userService.trim()) return;
    addDataToQueue({ userName, userService });
    setUserName("");
    setUserService("");
  };

  const styles = {
    card: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5eaf2",
      borderRadius: "16px",
      padding: "26px",
      boxShadow: "0 4px 18px rgba(24, 39, 75, 0.04)",
      boxSizing: "border-box",
      minWidth: 0,
    },
    heading: {
      margin: "0 0 8px",
      fontSize: "19px",
      fontWeight: "750",
      color: "#172b4d",
    },
    description: {
      margin: "0 0 26px",
      fontSize: "13px",
      color: "#718096",
      lineHeight: "1.6",
    },
    label: {
      display: "block",
      fontSize: "13px",
      fontWeight: "650",
      color: "#344563",
      marginBottom: "9px",
    },
    field: {
      width: "100%",
      padding: "13px 14px",
      border: "1px solid #dce3ed",
      borderRadius: "9px",
      fontSize: "14px",
      color: "#172b4d",
      backgroundColor: "#ffffff",
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    group: {
      marginBottom: "22px",
    },
    button: {
      width: "100%",
      padding: "14px",
      border: "none",
      borderRadius: "9px",
      backgroundColor: "#2447a8",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "700",
      cursor: "pointer",
      marginTop: "4px",
      boxShadow: "0 4px 10px rgba(36, 71, 168, 0.15)",
    },
    note: {
      margin: "18px 0 0",
      fontSize: "12px",
      color: "#8793a5",
      lineHeight: "1.6",
    },
  };

  return (
    <section style={styles.card}>
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "11px",
          backgroundColor: "#edf2ff",
          color: "#2447a8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "21px",
          marginBottom: "18px",
        }}
      >
        +
      </div>

      <h2 style={styles.heading}>Register a Customer</h2>
      <p style={styles.description}>
        Add a customer to the queue and assign the required service.
      </p>

      <form onSubmit={addUserToQueue}>
        <div style={styles.group}>
          <label style={styles.label} htmlFor="userName">
            Customer Name
          </label>
          <input
            id="userName"
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            style={styles.field}
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label} htmlFor="userService">
            Service Category
          </label>
          <select
            id="userService"
            onChange={(e) => setUserService(e.target.value)}
            value={userService}
            style={{
              ...styles.field,
              cursor: "pointer",
            }}
          >
            <option value="">Select a service</option>
            <option value="payments">Payments</option>
            <option value="consultations">Consultations</option>
            <option value="information">Information</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          + Add to Queue
        </button>
      </form>

      <p style={styles.note}>
        Customer details will be added to the active queue for service
        processing.
      </p>
    </section>
  );
};

export default QueueForm;
