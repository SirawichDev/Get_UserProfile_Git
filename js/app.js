
const github = new Github;

// search input

const search = document.getElementById('search_profile');

// แสดง textที่รักเข้ามา
search.addEventListener('keyup', (e)=>{
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call

        github.getUser(userText)
        .then(data =>{
            console.log(data);
        });
    }
});