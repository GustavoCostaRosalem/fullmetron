
if (usr && snh) {
    document
      .getElementById("cadsbtn")
      .addEventListener("click", async (event) => {
        event.preventDefault();
        const usr = document.getElementById("usr").value.trim;
        const snh = document.getElementById("snh").value.trim;
        if (!usr || !snh) {
          alert("preencha todos os campos")
          return
        }
        try {
          const response = await fetch("http://localhost:3000/cadastro",{
            method: "POST",
            headers: {"Content-Type": "applicatio/json"},
            body: JSON.stringify({ usr:usr,snh:snh})
          })
          if (!response.ok) throw new Error("HTTP error! status: ${response.status}")
          const data = await response.json() 
          alert("cadastro concluido bem vindo", data.usr)
          console.log(data)
        }
        catch(error) {
          alert("erro no cadastro")
          console.log("erro na api cadastro", error)
        }
      });
  } else {
    console.log("elementos nao encontrados");
  }
