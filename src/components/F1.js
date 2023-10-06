import "./style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function F1(){
    const mystyle={
        color:"blue"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline styling</h1>
            <h1 style={mystyle}>Internal styling</h1>      
            <h1 class="c1">Enternal Styling</h1>  
            <h1 class="text-center text-success">Bootstrap Styling</h1>
            </div>
        )
}

export default F1;