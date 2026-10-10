
import React, { useState } from "react";
import QueueDisplay from "./components/QueueDisplay";
import QueueForm from "./components/QueueForm";
import {useQueue} from "./hooks/useQueue";

const App = () => {
  const {queueData,updateUserStatus,deleteUserData,addDataToQueue} = useQueue();

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f7fb",
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      color: "#172b4d",
    },
    header: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5eaf2",
      padding: "24px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    logo: {
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      backgroundColor: "#2447a8",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      fontWeight: "800",
    },
    title: {
      margin: 0,
      fontSize: "25px",
      fontWeight: "750",
      letterSpacing: "-0.7px",
    },
    subtitle: {
      margin: "5px 0 0",
      fontSize: "13px",
      color: "#718096",
    },
    headerBadge: {
      backgroundColor: "#e9f8ef",
      color: "#16804a",
      padding: "9px 14px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "700",
    },
    main: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "36px 5%",
    },
    welcome: {
      marginBottom: "28px",
    },
    welcomeTitle: {
      fontSize: "24px",
      fontWeight: "700",
      margin: "0 0 8px",
      color: "#172b4d",
    },
    welcomeText: {
      margin: 0,
      color: "#718096",
      fontSize: "14px",
      lineHeight: "1.7",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, 0.8fr) minmax(0, 1.7fr)",
      gap: "24px",
      alignItems: "start",
    },
    footer: {
      textAlign: "center",
      padding: "24px",
      color: "#8a97aa",
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.logo}>Q</div>
          <div>
            <h1 style={styles.title}>QueueFlow</h1>
            <p style={styles.subtitle}>Queue Management System</p>
          </div>
        </div>

        <div style={styles.headerBadge}>● System Operational</div>
      </header>

      <main style={styles.main}>
        <section style={styles.welcome}>
          <h2 style={styles.welcomeTitle}>Queue Operations Dashboard</h2>
          <p style={styles.welcomeText}>
            Manage customer requests, track service progress, and keep
            your operations running smoothly from one central workspace.
          </p>
        </section>

        <div style={styles.layout}>
          <QueueForm addDataToQueue={addDataToQueue} />

          <QueueDisplay
            queueData={queueData}
            updateUserStatus={updateUserStatus}
            deleteUserData={deleteUserData}
          />
        </div>
      </main>

      <footer style={styles.footer}>
        QueueFlow · Service Operations Workspace
      </footer>
    </div>
  );
};

export default App;
