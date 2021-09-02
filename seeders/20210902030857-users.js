'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      fullName: 'Philip Mann',
      firstName: 'Philip',
      lastName: 'Mann',
      email: 'philipmann91@gmail.com',
      imageUrl: 'https://lh3.googleusercontent.com/a-/AOh14GiYTVX_fqvy2Wg2O4H1a26EpWTgWwJc-9C3V0gk=s96-c',
      loginStrategy: 'google',
      loginStrategyId: '117844106997806649568',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
