import styles from "./CertificationStyles.module.css";

function Certification() {
  const certifications = [
    {
      title: "AWS APAC Solutions Architecture Virtual Experience Program",
      duration: "Forage - February 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_JECASwBXwMfN2jKfh_1707569873624_completion_certificate.pdf", // Example link
    },
    {
      title: "Cognizant Artificial Intelligence Job Simulation",
      duration: "Forage - February 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_JECASwBXwMfN2jKfh_1707568636704_completion_certificate.pdf", // Example link
    },
    {
      title: "Accenture Developer Job Simulation",
      duration: "February 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_JECASwBXwMfN2jKfh_1707568639900_completion_certificate.pdf", // Example link
    },
    {
      title: "PHP Framework (Laravel)",
      duration: "04/2023 - 07/2023",
      link: "https://example.com/laravel-certificate", // Example link
    },
  ];

  return (
    <section id="certifications" className={styles.container}>
      <div className={styles.certificationContainer}>
        <h2 className={styles.heading}>Certifications</h2>
        <div className={styles.certificationList}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationItem}>
              <h3 className={styles.title}>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </a>
              </h3>
              <span className={styles.duration}>{cert.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
