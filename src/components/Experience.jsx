import { Component } from "react"

class Experience extends Component {
    // untuk menginisialisasikan state
    constructor(props) {
    //untuk memanggil dan mengakses parent component 
      super(props);
      this.state = {date: new Date()};
    }
  //Metod yang berjalan setelah komponen sudah terender
  //Dan biasnya digunakan untuk req data
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  //Metod yang berjalan setelah component di lepas
  //mencopot/memberhentikan 
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  //metod digunakan untuk mengatur timenya
    tick() {
      this.setState({
        date: new Date()
      });
    }
    //sebuah metod yang digunakan untuk rendering dimana nanti 
    //dia bisa menerima sbuah props
    render() {
      return (
        <div>
          <h1>Latihan gan</h1>
          <h2 >It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Experience;