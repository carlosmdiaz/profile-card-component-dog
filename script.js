let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}
let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: "https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: "url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {
        return "meow meow"
    }
}

let whichUser = false;
//body
document.body.style.backgroundImage = "url('URL')";
document.body.style.backgroundColor = dog.backgroundColor

//container top
document.getElementsByClassName('top')[0].style.backgroundImage = dog.bannerImg;

//profile picture
document.getElementsByClassName('profilepic')[0].style.backgroundImage = `url(${dog.profileImg})`;
document.getElementsByClassName('profilepic')[0].style.backgroundSize = "100px 100px";

//Name, age and location
document.getElementsByClassName('text')[0].innerHTML = `<h3>${dog.name}</h3> <w>${dog.age}</w>`
document.getElementsByClassName('city')[0].innerText = dog.location;
//console.log(document.getElementsByClassName('text')[0]) 

//Footer
//document.getElementsByClassName('flp')[0].innerHTML = 
document.getElementsByClassName('flp')[0].innerHTML = `<p>Followers</p> <p>${dog.stats.followers}</p>`;
document.getElementsByClassName('flp')[1].innerHTML = `<p>Likes</p> <p>${dog.stats.likes}</p>`;
document.getElementsByClassName('flp')[2].innerHTML = `<p>Posts</p> <p>${dog.stats.posts}</p>`;
console.log(document.getElementsByClassName('flp')[0].innerHTML);

let getBtn = document.getElementById('btn');
getBtn.addEventListener("click", function(obj){
    if ( whichUser == false){
        //body
        document.body.style.backgroundImage = "url('URL')";
        document.body.style.backgroundColor = cat.backgroundColor

        //container top
        document.getElementsByClassName('top')[0].style.backgroundImage = cat.bannerImg;

        //profile picture
        document.getElementsByClassName('profilepic')[0].style.backgroundImage = `url(${cat.profileImg})`;
        document.getElementsByClassName('profilepic')[0].style.backgroundSize = "100px 100px";

        //Name, age and location
        document.getElementsByClassName('text')[0].innerHTML = `<h3>${cat.name}</h3> <w>${cat.age}</w>`
        document.getElementsByClassName('city')[0].innerText = cat.location;

        //Footer
        document.getElementsByClassName('flp')[0].innerHTML = `<p>Followers</p> <p>${cat.stats.followers}</p>`;
        document.getElementsByClassName('flp')[1].innerHTML = `<p>Likes</p> <p>${cat.stats.likes}</p>`;
        document.getElementsByClassName('flp')[2].innerHTML = `<p>Posts</p> <p>${cat.stats.posts}</p>`;
        console.log(document.getElementsByClassName('flp')[0].innerHTML);
        whichUser = true
    } else if (whichUser == true){
        //body
        document.body.style.backgroundImage = "url('URL')";
        document.body.style.backgroundColor = dog.backgroundColor

        //container top
        document.getElementsByClassName('top')[0].style.backgroundImage = dog.bannerImg;

        //profile picture
        document.getElementsByClassName('profilepic')[0].style.backgroundImage = `url(${dog.profileImg})`;
        document.getElementsByClassName('profilepic')[0].style.backgroundSize = "100px 100px";

        //Name, age and location
        document.getElementsByClassName('text')[0].innerHTML = `<h3>${dog.name}</h3> <w>${dog.age}</w>`
        document.getElementsByClassName('city')[0].innerText = dog.location; 

        //Footer
        document.getElementsByClassName('flp')[0].innerHTML = `<p>Followers</p> <p>${dog.stats.followers}</p>`;
        document.getElementsByClassName('flp')[1].innerHTML = `<p>Likes</p> <p>${dog.stats.likes}</p>`;
        document.getElementsByClassName('flp')[2].innerHTML = `<p>Posts</p> <p>${dog.stats.posts}</p>`;
        console.log(document.getElementsByClassName('flp')[0].innerHTML);
        whichUser = false;
    }
});