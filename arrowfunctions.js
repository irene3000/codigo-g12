function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

//   reescribir con arrowfunctions

  let ask = (question,yes,no)=>{
    if (confirm(question)) yes();
    else no();
    return ;
  }