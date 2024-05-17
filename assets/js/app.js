const cl = console.log;
const stdContainer = document.getElementById("stdContainer");
const stdForm = document.getElementById("stdForm");
const fname = document.getElementById("fname");


const stdArr = [
    {
		fname : "Jhon",
		lname : "Doe",
		email : "jhon@gmail.com",
		contact : 9876543210,
		id : "123"
	},
	{
		fname : "Jen",
		lname : "Doe",
		email : "jen@gmail.com",
		contact : 9876543210,
		id : "124"
	},
]
const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const createRows =(arr, idContainer) => {
	let result = '';
    arr.forEach((std, i) => {
	result += `
	            <tr id="${std.id}">
					<td>${i +1}</td>
					<td>${std.fname}</td>
					<td>${std.lname}</td>
					<td>${std.email}</td>
					<td>${std.contact}</td>
				</tr>
	          `
})
idContainer.innerHTML = result;

}

createRows(stdArr, stdContainer);



const onStdAdd =(eve) => {
	eve.preventDefault();
	
	let newStd = {
		fname : eve.target['0'].value,
		lname : eve.target['1'].value,
		email : eve.target['2'].value,
		contact : eve.target['3'].value,
		id : generateUuid()
	}
	
	stdArr.unshift(newStd);
	createRows(stdArr,stdContainer);
	eve.target.reset()
}


stdForm.addEventListener("submit", onStdAdd)