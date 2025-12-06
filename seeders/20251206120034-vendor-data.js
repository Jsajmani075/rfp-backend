'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vendors', [{
      vendor_name: "TechNova Solutions",
      vendor_email: "jagjotajmani075@gmail.com",
      tags: "Leading provider of IT outsourcing and cloud services.",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vendor_name: "BrightSoft Digital",
      vendor_email: "jagjotajmani075@gmail.com",
      tags: "Offers full-stack development and UI/UX design expertise.",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vendor_name: "Apex Media Works",
      vendor_email: "jsajmani5@trueigtech.com",
      tags: "Digital marketing, branding and e-commerce solutions.",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vendor_name: "CodeWave Technologies",
      vendor_email: "jsajmani5@trueigtech.com",
      tags: "Specialized in scalable backend services and DevOps automation.",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vendor_name: "PixelEdge Studios",
      vendor_email: "salujaakshdeep@gmail.com",
      tags: "Creative studio focusing on animations, graphics and product videos.",
      created_at: new Date(),
      updated_at: new Date()
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendors', null, {});
  }
};



