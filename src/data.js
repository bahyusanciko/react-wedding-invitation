export const data = {
  en: {
    config: {
      name: 'Sari-Tri',
      bgm: require('./assets/song.mp3'),
    },
    header: {
      bgImageLandscape: [require('./assets/images/moment/ls-1.jpg')],
      bgImagePortrait: [
        require('./assets/images/moment/pt-0.jpg'),
      ],
      bridegroom: 'Sari & Tri',
      desc: 'AKAN MENIKAH',
      date: 'Minggu, 15 DESEMBER 2024',
      timestamp: new Date('2024-12-15').getTime(),
      ongoing: 'BERLANGSUNG',
      days: 'HARI',
      hours: 'JAM',
      minutes: 'MENIT',
      seconds: 'DETIK',
      line1: 'Kepada Yth: Bapak / Ibu / Saudara',
      line2: 'Kami Mengundang Anda Untuk Merayakan Pernikahan Kami',
      button: 'Buka Undangan',
    },
    navbar: {
      brand: 'S & T',
      nav: [
        { to: 'header', text: 'Beranda' },
        { to: 'couple', text: 'Pasangan' },
        { to: 'events', text: 'Acara' },
        { to: 'moment', text: 'Momen' },
        { to: 'location', text: 'Lokasi' },
        { to: 'gift', text: 'Hadiah' },
        { to: 'greeting-card', text: 'Kartu Ucapan' },
      ],
    },
    couple: {
      title: 'Temui Pasangan Bahagia',
      groom: {
        name: 'Praka Tri Krisstanto',
        // photo: require('./assets/images/couple/1.jpeg'),
        status: 'PENGANTIN PRIA',
        socmed: {
          facebook: 'https://www.facebook.com/bahyusanciko/',
          twitter: 'https://x.com/bhysnck',
          instagram: 'https://www.instagram.com/bahyusanciko/',
        },
        description: 'Putra ketiga dari Bapak Sadimun dan Ibu Sarmini',
      },
      bride: {
        name: 'Novia Indahsari',
        // photo: require('./assets/images/couple/2.jpeg'),
        status: 'PENGANTIN WANITA',
        socmed: {
          facebook: 'https://www.facebook.com/profile.php?id=100008708643415',
          twitter: 'https://x.com/sellaprwt',
          instagram: 'https://www.instagram.com/sellaprwt/',
        },
        description: 'Putri Kedua dari Bapak (Alm) Jamaludin dan Ibu (Almh) Siti Aisyah',
      },
    },
    events: {
      ceremony: {
        type: 'ceremony',
        foto: require('./assets/images/events/events.jpg'),
        title: 'AKAD',
        date: 'Minggu, 15 Desember 2024',
        time: '08.00 - 11.00 WIB',
        address: {
          line1: 'Aula Balai Warga Rumah Susun Penjaringan',
          line2: 'JL. Tanah Merah RT.7/RW.6',
          line3: 'Penjaringan, Jakarta Utara',
        },
      },
      reception: {
        type: 'reception',
        foto: require('./assets/images/events/events.jpg'),
        title: 'RESEPSI',
        date: 'Minggu, 15 Desember 2024',
        time: '12.00 - 17.00 WIB',
        address: {
          line1: 'Aula Balai Warga Rumah Susun Penjaringan',
          line2: 'JL. Tanah Merah RT.7/RW.6',
          line3: 'Penjaringan, Jakarta Utara',
        },
      },
    },
    moment: {
      images: [
        {
          src: require('./assets/images/moment/pt-0.jpg'),
          thumbnail: require('./assets/images/moment/pt-0.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
        {
          src: require('./assets/images/moment/ls-1.jpg'),
          thumbnail: require('./assets/images/moment/ls-1.jpg'),
          thumbnailWidth: 320,
          thumbnailHeight: 200,
        },
      ],
    },
    location: {
      maps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15867.982194928056!2d106.7956124!3d-6.1312991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dbfa96979b5%3A0x5af140611d719563!2sBalai%20Warga%20Rusun%20Penjaringan(PTM%20Tower%2006)!5e0!3m2!1sen!2sid!4v1732585024049!5m2!1sen!2sid',
    },
    gift:{
      title: 'Kami sangat berterima kasih atas kehadiran dan doa restu Anda. Jika Anda ingin mengirimkan hadiah, Anda dapat menggunakan tautan pembayaran atau kode QR berikut:',
      images: [
        {
          title: 'BCA - 5490252063 a/n Bahyu',
          src:require('./assets/images/gift/bahyu-bca.jpeg'),
        },
        {
          title: 'BCA - 1610026458 a/n Sella',
          src:require('./assets/images/gift/sella-bca.jpeg'),
        },
      ],
    }
  },
};
