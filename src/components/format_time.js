import React, {Component} from "react";

class FormatTime extends Component{
    constructor(props){
        super (props);

        this.state = {
            hour: 0,
            min: 0,
            sec: 0,
            ms: 0
        };
        this.timerStyle = {
            display: "inline-block",
            position: "relative",
            left: "50%",
            transform: "translate(-50%)",
            width: "96%",
            fontSize: "8vmax"
        }
    };
    componentWillReceiveProps(nextProps){
        let {elapsed} = nextProps;
        let sec = elapsed / 1000;
        let min = sec / 60;

        this.setState({
            hour: min / 60 >> 0,
            min: min % 60 >> 0,
            sec: sec % 60 >> 0,
            ms: elapsed % 100 >> 0
        })
    };
    leadingZero(number){
       return number < 10 ? `0${number}` : number;
    };
    trailingZero(number){
      return number < 10 ? `${number}0` : number;
    };
    render(){
        const {hour, min, sec, ms} = this.state;
        return(
          <div style={this.timerStyle}>
              {this.leadingZero(hour)}:{this.leadingZero(min)}:{this.leadingZero(sec)}.{this.trailingZero(ms)}
          </div>
        );
    };
}

export default FormatTime;