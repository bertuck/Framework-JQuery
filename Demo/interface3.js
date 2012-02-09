var conf   =    {name:"theGrid", width: 100}

var source = [
                {name:"Number", type:"int"},
                {name:"String", type:"string"},
                {name:"Mail", type:"string"}
             ]

var theme = [
                {name:"Mail", width:"50", align:"left", editable:true},
                {name:"Number", width:"50", align:"left", editable:true},
                {name:"String", width:"50", align:"left",  editable:true}
            ]

var grid = {conf:conf, source:source, theme:theme}
