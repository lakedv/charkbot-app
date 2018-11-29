import React, { Component } from 'react'
import { addprodc } from './UserFunctions'

class AddProdc extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            value: '',
            desc: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const newProd = {
            name: this.state.name,
            value: this.state.value,
            desc: this.state.desc,
        }

        addprodc(newProd).then(() => {
            this.props.history.push(`/`)
        })
    }
    render() {


        localStorage.getItem('usertoken')

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Add Product</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter its Name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Value</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="value"
                                    placeholder="Enter a price"
                                    value={this.state.value}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Description</label>
                                <textarea
                                    className="form-control"
                                    name="desc"
                                    placeholder="Description"
                                    value={this.state.desc}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Add!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProdc;