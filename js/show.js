class show {
    constructor(){
        this.profile = document.getElementById('show');
    }
    
    showUser(user){
        this.profile.innerHTML = `
        
        <div class="row">
            <div class="col-1-of-2">
                <img src ="${user.avatar_url}"
            </div>
            <div class="col-1-of-2">
                    1 of 2
            </div>
        </div>
        <div class="row">
            <div class="col-1-of-3">
                    1 of 3 
            </div>
            <div class="col-1-of-3">
                    1 of 3 
            </div>
            <div class="col-1-of-3">
                    1 of 3 
            </div>
        </div>
        `
    }
}