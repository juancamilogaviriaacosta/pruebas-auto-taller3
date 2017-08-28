var assert = require('assert');
describe('los estudiantes login', function() {

    //PRUEBA 1 login exitoso
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('cosmefulanitog88@gmail.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('cosmefulanitog88');

        cajaLogIn.element('button=Ingresar').click()

        browser.waitForVisible('#cuenta', 10000);
        browser.click('#cuenta')
        browser.click('a=Salir')
    });

    //PRUEBA 2 creacion de usuario con usuario existente
    it('Creacion de cuenta con usuario existente', function () {
        browser.url('https://losestudiantes.co');
        //var hayCerrar = browser.waitForExist('button=Cerrar', 10000)
        //if(hayCerrar) {
        //    browser.click('button=Cerrar');
        //}
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombre = cajaSignUp.element('input[name="nombre"]');
        var apellido = cajaSignUp.element('input[name="apellido"]');
        var correo = cajaSignUp.element('input[name="correo"]');
        var password = cajaSignUp.element('input[name="password"]');

        nombre.click();
        nombre.keys('pruebas');

        apellido.click();
        apellido.keys('automaticas');

        correo.click();
        correo.keys('cosmefulanitog88@gmail.com');

        password.click();
        password.keys('cosmefulanitog88');

        browser.waitForVisible('button=Registrarse', 10000);
        browser.click('button=Registrarse');

        browser.waitForVisible('.sweet-alert', 10000);
        var alerta = browser.getText('.sweet-alert');
        console.log(alerta);
        expect(alerta).toContain('Ocurrió un error activando tu cuenta');
    });
});
