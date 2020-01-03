let memberList = [];
let id = 0;


function Save(){
    id = id + 1;
    let list = new Object;
    list.name = document.getElementById('name').value;
    list.lastName = document.getElementById('lastName').value;
    list.age = document.getElementById('age').value;
    list.birthday = document.getElementById('birthday').value;
    let memberBtn = document.createElement('BUTTON');
    memberBtn.id = 'member' + id;
    memberBtn.innerHTML = 'Member' + id
    document.getElementById('memebers').appendChild(memberBtn);
    memberList.push(list);
    document.getElementById(memberBtn.id).onclick = ShowingMembers;
    Reset();
}


function ShowingMembers(e){
  debugger
    for(i=1; i <= 4; i++) {
        let showMember = document.createElement('p');
        document.getElementById('exhibit').appendChild(showMember);
        showMember.id = i;
    }
    let btnId = e.currentTarget.id;
    btnId = parseFloat(btnId.slice(6)) - 1;
    document.getElementById('1').innerHTML = memberList[btnId].name; 
    document.getElementById('2').innerHTML = memberList[btnId].lastName; 
    document.getElementById('3').innerHTML = memberList[btnId].age; 
    document.getElementById('4').innerHTML = memberList[btnId].birthday; 
}


function Reset(){
    document.getElementById('name').value= null;
    document.getElementById('lastName').value= null;
    document.getElementById('age').value= null;
    document.getElementById('birthday').value = null;
}

