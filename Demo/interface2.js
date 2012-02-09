var conf  =             {name:"Formation", width:"500", widhtaction:"send_form.php", method:"POST"}

var source =[
                        {name:"nom", type:"string"},
                        {name:"mail", type:"string"},
                        {name:"age", type:"int"},
						{name:"fruit", type:"checkbox"},
						{name:"pays", type:"radios"},
                        {name:"secure", type:"captcha"},
                        {name:"description", type:"textarea"},
                        {name:"selection", type:"select"},
						{name:"Submit", type:"button"},
						{name:"Reset", type:"button"}
			]
			
var theme = [
                        {name:"nom", display:"Nom :", required:true, defaultValue:"Entrez votre nom"},
                        {name:"mail", display:"Email :", required:true, validation:"email"},
                        {name:"age", display:"Age :", validation:"number", errorMessage:"Veuillez entrez un nombre"},
                        {name:"fruit", display:"Fruit :", legend:"Choisissez parmis ces fruit", choices:{"apples":"Apples","oranges":"Oranges","grapes":"Grapes"}, required:true},
                        {name:"pays", display:"Pays :", legend:"Choisissez un pays", choices:["Mac","Linux","Windows","Ubuntu"], required:true} ,
						{name:"secure", captchaQuestions:{'5 + 5 = ?' : '10', 'What color is the sky?':'blue', '2 + 2 = ?' : '4'}, required:true},
                        {name:"description", display:"Decrivez vous en quelques mots", required:true, cols:"60", rows:"10"},
                        {name:"selection", display:'Do you like jQuery?',required:true, choices:{'1':'Yes','2':'No'}},
                        {name:"Submit", display:"Submit"},
                        {name:"Reset", display:"Reset", type:"reset"}
			]

var formation = {conf:conf, source:source, theme:theme}
