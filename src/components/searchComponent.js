import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getCycleTheftIncidents } from '../actions/index';
import { connect } from 'react-redux';

/*** styled components */

const SearchForm = styled.form`
color:black;
`

const Input = styled.input`
height: 40;
`

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            fromdate: '',
            todate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.fromDateChange = this.fromDateChange.bind(this);
        this.toDateChange = this.toDateChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    fromDateChange(event) {
        this.setState({
            fromdate: event.target.value
        });
    }

    toDateChange(event) {
        this.setState({
            todate: event.target.value
        });
    }

    changeDatetoTimeFormat(inputDate) {
        let d = new Date(inputDate);
        return d.getTime();
    }

    handleClick = () => {
        debugger;
        let fromDate = this.changeDatetoTimeFormat(this.state.fromdate);
        let toDate = this.changeDatetoTimeFormat(this.state.todate);

        if (this.state.value && this.state.fromdate && this.state.todate) {
            this.props.getCycleTheftIncidents(this.state.value, fromDate, toDate).bind(this);
        }
    }



    render() {
        return (
            <div>
                <div>
                    <Input type="text" value={this.state.value} onChange={this.handleChange} />
                    <Input type="date" value={this.state.fromdate} onChange={this.fromDateChange} />
                    <Input type="date" value={this.state.todate} onChange={this.toDateChange} />
                    <Input type="button" value="Search" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    searchItemsState: state.SearchReducer
});



export default connect(mapStateToProps, {
    //write actions
    getCycleTheftIncidents
})(SearchComponent);