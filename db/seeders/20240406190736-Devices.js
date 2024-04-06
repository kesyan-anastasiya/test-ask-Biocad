'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Devices',
      [
        {
          title: 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220',
          status: true,
          img: 'https://s3-alpha-sig.figma.com/img/1e21/3860/d5d136c1c4ae4ac597d9f3711300410e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pkB~7qD4dvWLARDRU5F-EeQElAPT6XWV6xQiymiynJUmkx2GvkodoCM-a~kVibj1vUAmPEI7uA6Dm59dz1-ipDUf8svgKBSLyuqqPdzTMv753toWwB8cMg3XemjHORXN4e7GbliboyPozrrpWIMDYBy9D9gd5CPZIK~XGd4jBkwv3OIlNttCy95rsM3erLvSacQ54eO7Z06sSjuPy6nHzvrc3odRgnLgB9uzPxO~cDFnOdleeKL8~RxouNcE3mKC25VcYYX0YmgZ-mYQcgp9EYof3Gh3y~R1aCVbac2EnOdfiiWugV4jetfIoOg9DJQqiV2e9Chh8gtWTfHGH7YbtQ__',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Спектрофотометр Varian, Inc Cary 50 Bio',
          status: true,
          img: 'https://s3-alpha-sig.figma.com/img/7f18/df8d/8897edb55583f6a0873d829c29912a82?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gAGxyV8Fm~STxLy2bavToYrIUw-MsHhdLFdS9jdmAdk~MEZsybrtgNVQb0XxyAZLB6OtIsqXtOHGpFKY5P0ztwZIE11bcEKx4wBPau9hcrPHvWIeKt5BhEcUoQdAnddHjHMamXfbefkcJhMJhwS4vEuT36Mo3G83E6CQhSjJMIewWGk2L8PmXst37vbgW42SFdTc1U4Xianh8nIG1TcQkX0siRmn9ZZTQ29j33we1VFzK9nSZN-1~Y4igt3BoeEL9o-zNiFgfUDpm0u8Rol1~wY0eVAA5FsabgRxrPuc5yWxMbLV0~9dhg-WHv0Qh~jFn4VudoSDHtpe6cjgKh-72w__',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Титратор',
          status: true,
          img: 'https://s3-alpha-sig.figma.com/img/0aec/1ce6/402d8f46f4004fa236d72e75f2e3ff0e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RORG4637uyj3Y6PB6HoxxpHTEwHM2sza7Cqh4nNP~o~lK7rTrLnCY6sfT-aJr-7Eiw4tZL2H~CfkkN~hl~vwNowLXUWp2fAmkKOwLSY1WVcB53YRESjLUzbh9VUC27VfXbdraoQ3XBleYEd9r33BPMBNWsI9rUXV9NB04dj8eGsF~lA23l5ibR01Dtva5kBX30wDSxRLBj9UCcl9Rp5BpbDBsNSWJ6WNdpZIr56GiMl~KTuC8JyPQrk4B3bY8BFK~iYL8K5FHYMdBspQy~05WpjdB9XpnRMdqPNO6QWius-cvz3cw-AICXgLYkvmycgqRCD5YM3SPTrj8ZRBjBLXLw__',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Коагулометр Tcoag, KC 4 Delta',
          status: true,
          img: 'https://s3-alpha-sig.figma.com/img/8cbb/0cb0/3e566397e8f55c4de80493aaf5a37298?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YoIBZyzNU55JO7wkU~Weru2~CJchyv6FmKmRy6YKgI9rHCH~C4uCbCI~2PAU-cNImkWIPe3OjpYs0rUAU2mG75cSnTW3KuSZlXLiTfic9ct6H6UwfSxjuSJfKgg4IWA~xwtvc8Sq9vtgzHbwUixej-NexSWa-C0ezxUUJg0mOb7heCeNUxKCENrq7PROJ4-Nv9O1C3H0~1-N727Z2bp3C4DL44x-OZpQzzoZu1lWR09p4eqNCSwDx2ueqoTDclPK1rsekJBZ3CFfRYeLHdLqQStyTYaSxASdKK8geyuJr95HvV9SfDzsQd2QJZZ0dAAu2hgMF7SynMKLV296wdEADQ__',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Devices', null, {});
  }
};
