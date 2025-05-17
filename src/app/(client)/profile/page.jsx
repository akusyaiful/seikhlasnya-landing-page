import Image from 'next/image';
import styles from './style.module.css';
import { UserIcon, InfoIcon, LogOutIcon } from 'lucide-react';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerTop}>
            <div className={styles.avatar}>
              <Image src="/avatar.png" alt="Avatar" width={64} height={64} />
            </div>
            <div className={styles.userInfo}>
              <h2 className={styles.userName}>Khoirul Musyafa</h2>
              <p className={styles.userRole}>Donatur</p>
            </div>
            <button className={styles.editButton}>✏️</button>
          </div>

          <div className={styles.stats}>
            <div>
              <p className={styles.statValue}>1,200</p>
              <p className={styles.statLabel}>Total Donasi</p>
            </div>
            <div>
              <p className={styles.statValue}>4</p>
              <p className={styles.statLabel}>Donasi Bulan Ini</p>
            </div>
            <div>
              <p className={styles.statValue}>Rp 45Jt</p>
              <p className={styles.statLabel}>Jumlah Donasi</p>
            </div>
          </div>
        </div>

        <div className={styles.cardBody}>
          <MenuItem icon={<UserIcon size={20} />} text="Hubungi Kami" />
          <MenuItem icon={<InfoIcon size={20} />} text="Tentang Seikhlasnya" />
          <MenuItem icon={<LogOutIcon size={20} />} text="Keluar" />
        </div>
      </div>
    </div>
  );
};

function MenuItem({ icon, text }) {
  return (
    <div className={styles.menuItem}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default Profile;
