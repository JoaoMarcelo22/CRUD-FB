var authEmailPassButton = document.getElementById('authEmailPassButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var crateUserButton = document.getElementById('createUserButton')

var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

var displayName = document.getElementById('displayName')

creatUserButton.addEventListener('click', function(){
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.Value, passwordInput.Value)
        .then(function (){
            alert('Bem vindo' + emailInput.value);
        })
        .catch(function(error){
            console.error(error.code);
            console.error(error.menssage);
            alert('Falha ao cadastrar, verifique erro no console.')
        });
})