
//PRUEBA 3 Busqueda por profesor
//PRUEBA 4 Filtro por materia del profesor
module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes prueba busqueda profesor y filtro por materia': function(browser) {
    browser
      .resizeWindow(1280, 1024)
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .click('.Select-placeholder')
      .setValue('.Select-input input[role="combobox"]', 'juan')
      .waitForElementVisible('.Select-menu-outer', 10000)
      .waitForElementVisible('.Select-menu', 10000)
      .waitForElementVisible('.Select-option', 10000)
      .click('.Select-option')
      .waitForElementVisible('.materias', 10000)
      .end();
  }
};
