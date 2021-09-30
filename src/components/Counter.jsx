import { Component } from "react"
import { Button } from "reactstrap"

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  handleChange(type) {
    if(type === "plus") {
      this.setState({
        number: this.state.number + 1
      })
    } else if(type === "minus") {
      this.setState({
        number: this.state.number - 1
      })
    } else if(type === "reset") {
      this.setState({
        number: 0
      })
    }
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-12">
          <h1>{this.props.title}</h1>
          <h2 className="text-center">{this.state.number}</h2>
          <div className="text-center">
            <Button
              color="primary"
              size="lg"
              className="mr-2"
              onClick={() => this.handleChange("plus")}>
                Plus
            </Button>
            <Button
              color="danger"
              size="lg"
              className="mr-2"
              onClick={() => this.handleChange("reset")}>
                Reset
            </Button>
            <Button
              color="warning"
              size="lg"
              className="mr-2"
              onClick={() => this.handleChange("minus")}>
                Minus
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;
