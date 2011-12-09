var form = [{name:"browser", width: 100}]

var source = [
                {name:"Folder1", type:"folder", subfolder: [{name:"Folder1.1", type:"folder", subfolder: [{name:"Folder1.1.1", type:"file"}]}, {name:"Folder1.2", type:"folder"}]},
                {name:"Folder2", type:"folder"},
                {name:"Folder3", type:"folder"},
                {name:"File1", type:"file"}
             ]

var theme = [
                {name:"Folder1", state:"closed", items:[{name:"Item1"}, {name:"Item1.2"}]},
                {name:"Folder1.1", state:"closed", items:[{name:"Item1.1.1"}]},
                {name:"Folder1.1.1", state:"opened"},
                {name:"Folder1.2", state:"opened"},
                {name:"Folder2", state:"closed", items:[{name:"Item2.1"}, {name:"Item2.2"}]},
                {name:"Folder3", state:"closed", items:[{name:"Item3.1"}, {name:"Item3.2"}]}
            ]

