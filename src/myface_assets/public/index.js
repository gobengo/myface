import myface from 'ic:canisters/myface';

myface.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
