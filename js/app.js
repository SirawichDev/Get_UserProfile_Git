
 github = new GitHub;
 show = new show;
// search input

const search = document.getElementById('search_profile');

// แสดง textที่รักเข้ามา
search.addEventListener('keyup', (e)=>{
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data =>{
            if(data.profile.message === 'No User'){

            }else {
                show.showUser(data.profile);

            }
        });
    } else{
        
    }
});