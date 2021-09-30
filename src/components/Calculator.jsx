import { Component } from "react"
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      operator: "tambah",
      total: 0
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleCalculate = () => {
    const { x, y, operator } = this.state
    if(operator === "tambah") {
      this.setState({
        total: parseInt(x)+parseInt(y)
      })
    } else if(operator === "kurang") {
      this.setState({
        total: parseInt(x)-parseInt(y)
      })
    } else if(operator === "kali") {
      this.setState({
        total: parseInt(x)*parseInt(y)
      })
    } else if(operator === "bagi") {
      this.setState({
        total: parseInt(x)/parseInt(y)
      })
    }
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col-12">
          <h1>{this.props.title}</h1>
          <h2 className="text-center">{this.state.total}</h2>
          <Form>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Input name="x" type="number" placeholder="X value..." onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Input type="select" name="operator" onChange={this.handleChange}>
                    <option value="tambah">+</option>
                    <option value="kurang">-</option>
                    <option value="kali">*</option>
                    <option value="bagi">/</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Input name="y" type="number" placeholder="Y value..." onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <div className="text-center">
              <Button color="success" size="lg" onClick={this.handleCalculate}>Calculate</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Calculator;
