members = [0]
let idNumber = 0;

function Save(){
    idNumber = idNumber + 1;
    let name = document.getElementById('name').value;
    let sureName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let birthday = document.getElementById('birthday').value;
    let member = name + ',' + sureName + ',' + age + ',' + birthday; 
    members.push(member);
    let membersBtn = document.createElement('BUTTON');
    document.getElementById('memebers').appendChild(membersBtn);
    membersBtn.id = idNumber;
    membersBtn.innerHTML = 'Member' + idNumber;
    document.getElementById(membersBtn.id).onclick = Show;
}


function Show(e){
  debugger
    let result = members[e.currentTarget.id];
}
