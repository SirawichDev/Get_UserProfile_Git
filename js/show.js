class show {
    constructor(){
        this.profile = document.getElementById('show');
    }
    
    showUser(user){
        this.profile.innerHTML = `
        <section>
        <div class="row">
            <div class="col-1-of-2">
                <img src ="${user.avatar_url}"
            </div>
            <div class="col-1-of-2">
                 <a href="${user.html_url}" class="btn">View Profile</a>
            </div>
        </div>

        `
    }
}