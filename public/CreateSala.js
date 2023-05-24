
async function CreateSala() {
     
  var response=    await  fetch(`http://20.14.146.108:8081/addRoom/`+document.getElementById('Nombre').value+'/'+document.getElementById('Lenguaje').value+'/'+document.getElementById('priv').checked+'/'+document.getElementById('numJ').value+'/').then((res)=>{
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
  }
  );
    console.log(response);
    var skin = localStorage.getItem("skin");
    var nombre =localStorage.getItem("usuario");
    var response2 = await  fetch(`http://20.14.146.108:8081/addUser/` + nombre + '/' + skin+'/'+response).then((res) => {
        if (!res.ok)
            throw new Error("Response is NOT ok");
        console.log(res);
        //return res.json();
        return res;
    }
    );
    console.log(response2);
    window.location.replace("Partida.html?id="+response);
}
