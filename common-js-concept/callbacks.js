function greeting(greetingHandler,name) {
  greetingHandler(name);
  greetingEvening(name);
  greetingNight()
}

function greetingHandler(name) {
  console.log('Good Morning',name)
}

function greetingEvening(name ) {
  console.log('good evining',name)
}
function greetingNight() {
  console.log('good night')
}
greeting(greetingHandler,'tom')
greeting(greetingHandler,'baries');
greeting(greetingHandler,'jerry');
greeting(greetingEvening,'jhon');
greeting(greetingNight);


