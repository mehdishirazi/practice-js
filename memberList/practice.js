
function List(){
let name = document.getElementById('name').value;
  debugger
    a = a + 1;
    let memberBtn = document.createElement('BUTTON');
    document.getElementById('memebers').appendChild(memberBtn);
    memberBtn.id = "memberId" + a;
    let members = {};
    members['member' + a] = new Array();
    members['member' + a].push(name);
}
