const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(users => displayUsers(users.results))
}
const displayUsers = (users) => {
    // console.log(users)
    const userContainer = document.getElementById('users-container');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML =`
        <img class="rounded" src="${user.picture.medium}">
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <h3>Gender: ${user.gender}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <h4>Location</h4>
        <div class="ms-3">
            <p>Country: ${user.location.country}</p>
            <p>City: ${user.location.city}</p>
            <p>State: ${user.location.state}</p>
            <p>Postal Code: ${user.location.postcode}</p>
        </div>
        `
        console.log(userDiv)
        console.log(user)
        userContainer.appendChild(userDiv);
    })
}
loadUsers();