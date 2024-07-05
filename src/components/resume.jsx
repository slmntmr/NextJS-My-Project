import React from 'react';

const Resume = ({ Name, LastName, Age, Description, Jop, AplicationLang }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px', // Elemanlar arasındaki boşluk
      alignItems: 'flex-start' // Elemanların hizalanması
    },
    item: {
      margin: '0', // Varsayılan marjları sıfırlama
      padding: '5px', // Elemanlara iç boşluk ekleme
      width: '100%' // Elemanların satırın tamamını kaplaması
    },
    name: {
      backgroundColor: 'lightblue'
    },
    lastName: {
      backgroundColor: 'lightgreen'
    },
    age: {
      backgroundColor: 'lightcoral'
    },
    description: {
      backgroundColor: 'lightyellow'
    },
    jop: {
      backgroundColor: 'lightgray'
    },
    applicationLang: {
      backgroundColor: 'lightpink'
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.item}>Resume</h1>
      <p style={{ ...styles.item, ...styles.name }}>{Name}</p>
      <span style={{ ...styles.item, ...styles.lastName }}>{LastName}</span>
      <p style={{ ...styles.item, ...styles.age }}>{Age}</p>
      <p style={{ ...styles.item, ...styles.description }}>{Description}</p>
      <div style={{ ...styles.item, ...styles.jop }}>{Jop}</div>
      <div style={{ ...styles.item, ...styles.applicationLang }}>{AplicationLang}</div>
    </div>
  );
}

export default Resume;
