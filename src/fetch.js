console.log("In Fetch");

function getData(){

    console.log('Starting to Get the Data');

    url = "http://localhost:3000/contact";

    fetch(url).then((response1)=>{
        console.log('Inside the First Then Function');
        return response1.json();
    }).then((data1)=>{
        let data2 = data1.sort(sortFunction);    
        for(let i=0;i<data2.length;i++){
            var table = "<tr>"
            + "<td>" + data2[i].firstName + "</td>"
            + "<td>" + data2[i].lastName + "</td>"
            + "<td>" + data2[i].email + "</td>"
            + "<td>" + data2[i].homeNo + "</td>"
            + "<td>" + "<input type= button onclick ='display("+i+")'style = 'background-color: green' id='btn' value='+'/>" + "</td>"
            + "</tr>";
            $("#tbody").append(table);
        }
        display= function(i){
            window.alert("firstName:"+data2[i].firstName+"\nHome: "+ data2[i].homeNo+"\nWorkNo: "+ data2[i].workNo+"\nBirthdate: "+ data2[i].dob+"\njobTitle: "+ data2[i].jobTitle+"\ncompany: "+ data2[i].company+"\nnotes: "+ data2[i].notes);
        } 
        console.log('Inside the Second Then Function');
        console.log(data2);
    }).catch((error)=>{
        console.log('Error Occured:'+error);
    })

}

function sortFunction(a,b){
    if(a.firstName <b.firstName){
        return -1;
    }else if(a.firstName>b.firstName){
        return 1;
    }else{
        return 0;
    }

}