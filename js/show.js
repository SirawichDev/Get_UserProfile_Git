class show {
    constructor(){
        this.profile = document.getElementById('show');
    }
    
    showUser(user){
        //someFix
        this.profile.innerHTML = `

        <section>
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="card text-center">
                  <div class="title">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    <h2><img src="${user.avatar_url}"></h2>
                  </div>
                  <div class="price">
                    <h4><sup>$</sup>25</h4>
                  </div>
                  <div class="option">
                    <ul>
                    <li> <i class="fa fa-check" aria-hidden="true"></i> 10 GB Space </li>
                    <li> <i class="fa fa-check" aria-hidden="true"></i> 3 Domain Names </li>
                    <li> <i class="fa fa-check" aria-hidden="true"></i> 20 Email Address </li>
                    <li> <i class="fa fa-times" aria-hidden="true"></i> Live Support </li>
                    </ul>
                  </div>
                  <a href="">View Profile </a>
                </div>
              </div>

        `
    }
}