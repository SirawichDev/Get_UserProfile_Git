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
                    <li> </i>Public Repos: ${user.public_repos} </li>
                    <li> </i> Follower: ${user.followers} </li>
                    <li> </i> Following: ${user.following} </li>
                    <li> </i> location: ${user.location}</li>
                    </ul>
                  </div>
                  <a href="${user.html_url}">View Profile </a>
                </div>
              </div>

        `
    }
    ClearProfile(){
      this.profile.innerHTML = '';
    }
}