import React, { Component } from 'react';
import $ from 'jquery';

class ButtonFrame extends Component{

constructor(props,context){
  super(props,context)
  this.state = {

  }
}


render()
{


  var disable=(this.props.selectedNumbers.length===0),button,
  correct=this.props.correct;
console.log(correct);
  switch (correct) {
    case true:
      button=(<button className="btn btn-success btn-lg" onClick={this.props.acceptAnswer}>
<span className="glyphicon glyphicon-ok"></span>
      </button>);
      break;
      case false:
        button=(<button className="btn btn-danger btn-lg" >
        <span className="glyphicon glyphicon-remove"></span>
        </button>);
        break;
    default:

    button=(<button className="btn btn-primary btn-lg" disabled={disable} onClick={this.props.checkAnswer}>=</button>);

  }
  return(
    <div id="button-frame">

{button}
<br />
<br/>
<button className="btn btn-warning btn-xs" onClick={this.props.redraw}  disabled={this.props.redraws===0}>
<span className="glyphicon glyphicon-refresh"> </span> {this.props.redraws}
</button>
    </div>
  );
}

}
export default ButtonFrame;
