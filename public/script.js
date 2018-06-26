// get the schema for enigma
$.getJSON("/node_modules/enigma.js/schemas/12.67.2.json", function(data){
  // url needs changing to match the environment
  // app id also need replacing
  var config = {
    schema: data,
    url: "wss://10.211.55.3/demo/app/313d8ef9-84ab-40b3-954c-fe6ed83f41dd"
  }
  var session = enigma.create(config)
  session.open().then(function(qlik){
    qlik.openDoc("313d8ef9-84ab-40b3-954c-fe6ed83f41dd").then(function(app){
      document.getElementById("main").innerHTML = "Connected!"
    })
  })
})
