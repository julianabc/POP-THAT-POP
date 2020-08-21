function aparecerLogin() {
	// pegar ids
 	var btnLogin = document.getElementById("apCadastro");
 	var btnCadastro = document.getElementById("apLogin");

 	btnLogin.onclick = function(){
 		fieldL.style.display ="none";
 		fieldC.style.display = "block";
 	}

 	btnCadastro.onclick = function(){
 		fieldC.style.display = "none";
 		fieldL.style.display = "block";
 	}
}