// put the solution code to persist and fetch data here

// method to persist data


// method to fetch all contacts


// method to fetch contact by id


// Provide persistence solution code here


const persistSubmittedContact = (info) => {
    console.log("hi")
    let xhr=new XMLHttpRequest();
    xhr.open("POST","http://localhost:3000/contact",true)
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8"); //sets the value of an HTTP request header
    xhr.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
    {
       window.alert("Data added successfully");
       alert(this.responseText);
    }
};
   xhr.send(info);
}