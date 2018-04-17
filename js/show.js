class show {
    constructor(){
        this.profile = document.getElementById('show');
    }
    
    showUser(user){
        //someFix
        this.profile.innerHTML = `

             <section>
                <div class="card text-center">
                  <div class="title">
                    <i class="title__fa"></i>
                    <h2><img src="${user.avatar_url}"></h2>
                  </div>
                  <div class="price">
                    <h4>${user.login}</h4>
                  </div>
                  <div class="option">
                    <ul>
                    <li> <i class="fa " ></i>Public Repos: ${user.public_repos} </li>
                    <li> <i class="fa " ></i> Follower: ${user.followers} </li>
                    <li> <i class="fa " ></i> Following: ${user.following} </li>
                    <li> <i class="fa " ></i> Live Support </li>
                    </ul>
                  </div>
                  <a href="${user.html_url}">View Profile </a>
                </div>
              </div>

        `
    }
}