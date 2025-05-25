const AboutUs =() => {

    return (
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Poppins',
        color: '#333',
        lineHeight: '1.6'
      }}>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <img src="/assets/images/logo-lingkaran.png" alt="Logo" width={200} />
     </div>
  
        <div style={{
          backgroundColor: "white",
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <p style={{ marginBottom: '20px' }}>
            <strong>Seikhlasnya</strong> adalah platform donasi online yang lebih dari semangat gotong royong dan kepedulian terhadap sesama. Kami percaya bahwa setiap kebaikan, sekecil apa pun, dapat membawa perubahan besar. Melalui Seikhlasnya, kami ingin mempermudah siapa pun untuk berbagi, tanpa tekanan, tanpa paksaan — cukup seikhlasnya. Aplikasi ini dibuat dengan tujuan untuk menjadi jembatan antara para dermawan dan mereka yang membutuhkan, khususnya dalam lingkungan sekitar kita.
          </p>
          
          <p style={{ marginBottom: '20px' }}>
            <strong>Seikhlasnya</strong> hadir untuk memfasilitasi donasi yang transparan, aman, dan mudah, terutama bagi generasi muda yang ingin berbuat baik namun tidak tahu harus mulai dari mana. Kami berkomitmen untuk:
          </p>

          <ul style={{
            marginBottom: '20px',
            paddingLeft: '20px',
            listStyleType: 'disc'
          }}>
            <li style={{ marginBottom: '8px' }}>Menyediakan informasi donasi yang jelas dan terpercaya.</li>
            <li style={{ marginBottom: '8px' }}>Menyalurkan bantuan dengan penuh tanggung jawab.</li>
            <li style={{ marginBottom: '8px' }}>Membangun komunitas yang peduli dan aktif berbagi.</li>
          </ul>

  
          <p style={{ marginBottom: '20px' }}>
          Mari jadi bagian dari gerakan kebaikan ini. Karena kebaikan tidak harus besar untuk berdampak. Mulailah dari yang kecil, mulailah dari Seikhlasnya.
          </p>
          
        </div>
        
      </div>
    );

}

export default AboutUs;