import Image from 'next/image';
import styles from './EditProfile.module.css';

const EditProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={96}
              height={96}
            />
          </div>
          <span className={styles.editIcon}>✏️</span>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Nama Lengkap</label>
          <input className={styles.input} type="text" defaultValue="Musyafa" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Tanggal Lahir</label>
          <input className={styles.input} type="text" defaultValue="08 Juni 2001" />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" defaultValue="musyafarlts@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
