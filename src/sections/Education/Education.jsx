import styles from "./EducationStyles.module.css";

function Education() {
  const educationData = [
    {
      degree: "Matriculation - 84.2%",
      institution: "Prabhat Tara High School, Dhurwa",
      duration: "05/2015 - 07/2016",
      location: "Ranchi",
    },
    {
      degree: "Higher Secondary - 55.8%",
      institution: "Saraswati Shishu Vidya Mandir, Ranchi",
      duration: "06/2016 - 08/2018",
      location: "Ranchi",
    },
    {
      degree: "Bachelor Of Computer Application - 79.62%",
      institution: "Yogoda Satsanga Mahavidyalaya, Ranchi",
      duration: "08/2018 - 08/2021",
      location: "Ranchi",
    },
    {
      degree: "Master Of Computer Application - 76.25%",
      institution: "Ranchi University, Ranchi",
      duration: "08/2021 - 09/2023",
      location: "Ranchi",
    },
  ];

  return (
    <section id="education" className={styles.container}>
      <div className={styles.educationContainer}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.educationList}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.educationItem}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <span className={styles.duration}>{item.duration}</span>
              <p className={styles.location}>{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
