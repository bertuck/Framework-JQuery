
(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = {"required":{    
						"regex":"none",
						"alertText":"* Ce champs est requis",
						"alertTextCheckboxMultiple":"*Choisir un option",
						"alertTextCheckboxe":"* Ce checkbox est requis"},
					"length":{
						"regex":"none",
						"alertText":"* Entre ",
						"alertText2":" et ",
						"alertText3":" caracteres requis"},
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Nombre max the boite exceder"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Votre champs n'est pas identique"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\ ]+$/",
						"alertText":"* Numero de telephone invalide"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"* Adresse email invalide"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/",
                         "alertText":"* Date invalide, format YYYY-MM-DD requis"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"* Chiffres seulement accepte"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText":"* Aucune caractere special accepte"},	
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$/",
						"alertText":"* Lettres seulement accepte"}
				}	
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});