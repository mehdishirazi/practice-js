members = []

function Save(){
    let name = document.getElementById('name').value;
    let sureName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let birthday = document.getElementById('birthday').value;
    let member = name + ',' + sureName + ',' + age + ',' + birthday; 
    members.push(member);
}
