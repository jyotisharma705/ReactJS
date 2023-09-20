import React,{Component} from "react";
import Footer from "./Footer";
import Header from "./Header";

class App extends Component
{
constructor()
{
    super()
    this.state = {

        title:'Welcome',
        keyword: 'sub heading'

    }
}


    render()
    {
    return(
<>
    <Header/>
<div className="row">
<div className="col-sm-12">

<div class="panel panel-primary">
      <div class="panel-heading"><h1>{this.state.title}</h1>
      <h3>{this.state.keyword}</h3></div>
   
        <div class="panel-body">
        <div className="col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus urna at facilisis vestibulum. Mauris pharetra bibendum velit, in gravida nulla ornare et. Maecenas tincidunt ipsum at ultricies elementum. Suspendisse interdum egestas nisi, a sollicitudin ex finibus vitae. Aenean tempus enim nec nibh tempus auctor. Nam sit amet dictum est. Aenean sit amet pulvinar lorem. Vivamus sem quam, faucibus viverra enim eget, rutrum tempor lacus. Quisque rhoncus tempus dictum. Nullam in nisl gravida, dictum nunc quis, commodo libero. Proin blandit finibus risus, id tincidunt odio euismod at. Quisque tristique, arcu eget luctus placerat, metus est aliquet enim, efficitur lobortis odio tellus eu est. Nulla lobortis sapien sit amet egestas ornare. Quisque eu cursus est, eu fermentum elit. Praesent maximus orci nec massa ullamcorper pretium. Nam viverra scelerisque semper. </p>
            <button type="button" class="btn btn-success">Connect With Us</button> 

            </div>
            <div className="col-sm-6">
            Fusce rhoncus, libero vel accumsan dapibus, neque turpis viverra nulla, sed luctus metus sapien vel leo. Donec ut nulla vitae tortor blandit efficitur sed quis massa. Aenean dictum quam est, id dictum lorem ultricies nec. In non sem et eros finibus venenatis a at arcu. Donec ut varius sapien. Ut ultricies ac mi sit amet semper. Nullam in turpis metus. Vestibulum vitae libero condimentum, mollis turpis aliquam, auctor risus. Cras accumsan nec arcu eget tempor. Mauris quis velit id neque efficitur fringilla. Praesent in ullamcorper tellus. Integer sodales felis posuere consequat varius. Nam lectus ante, viverra pellentesque vulputate vel, dapibus eget ante. Aliquam luctus nibh ut ligula consectetur eleifend. In ac nibh mauris. Nulla posuere semper congue. 
</div>

            </div>

            </div>

</div>
</div>
    <Footer/>
    </>
    )
    }

}

export default App;