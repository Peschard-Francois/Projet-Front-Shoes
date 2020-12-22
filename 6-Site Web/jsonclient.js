const user = fetch("https://jsonplaceholder.typicode.com/users");


user
 .then((response) =>{
     console.log(response);

     const userdata = response.json();

     console.log(userdata);

     userdata.then((users) =>{


            const test = document.getElementById('test');
            let bloc ="";

            console.log(users[0].address["street"] + " " +users[0].address["suite"] + " " + users[0].address["city"]+ " " + users[0].address["zipcode"]);

        for (var i = 0; i < users.length; i++) {
            



            
            

            bloc += `<tr>
                     <td>${users[i].id}</td>
                     <td>${users[i].name}</td>
                     <td>${users[i].username}</td>
                     <td>${users[i].email}</td>
                     <td>${users[i].phone}</td>
                     <td>${users[i].address["street"] + " " +users[i].address["suite"] + " " + users[i].address["city"]+ " " + users[i].address["zipcode"]}</td>
                     <td>${users[i].website}</td>
                     <td>${users[i].company["name"] + " " +users[i].company["catchPhrase"] + " " + users[i].company["bs"]}</td>
                     
                     
                     </tr>
                     ` 
                   
                      



          }

          test.innerHTML = bloc;


     });

 })
 .catch((error) => console.log(error));