let names = []
let lastName = []
let age = []
let birthday = []
let id = 0;


function Save(){
    id = id + 1;
    let membersBtn = document.createElement('BUTTON');
    document.getElementById('memebers').appendChild(membersBtn);
    membersBtn.id = 'member' + id;
    membersBtn.innerHTML = 'member'+ id;
    NameList();
    LastName();
    Age();
    Birthday();
    Reset();
    document.getElementById(membersBtn.id).onclick = ShowingMembers;
} 


function NameList(){
    let name_list = document.getElementById('name').value;
    names.push(name_list);
}


function LastName(){
    let last_name = document.getElementById('lastName').value;
    lastName.push(last_name);
}


function Age(){
    let mature = document.getElementById('age').value;
    age.push(mature);
}


function Birthday(){
    let birth_day = document.getElementById('birthday').value;
    birthday.push(birth_day);
}


function Reset(){
    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;
    document.getElementById('age').value = null;
    document.getElementById('birthday').value = null;
}


function ShowingMembers(e){
  debugger
    let whichMember = e.currentTarget.id; 
    whichMember = whichMember.slice(6);
    whichMember = parseFloat(whichMember) - 1;
    document.getElementById('exhibit').innerHTML = names[whichMmember];
}
