import React, { Component } from 'react';


export class ListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          bikeTheftsArray: ['a','b','c','d','e','f','g','h','i','j','k'],
          currentPage: 1,
          todosPerPage: 10
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    
      render() {
        const { bikeTheftsArray, currentPage, todosPerPage } = this.state;
    
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = bikeTheftsArray.slice(indexOfFirstTodo, indexOfLastTodo);
    
        const renderTodos = currentTodos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        });
    
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bikeTheftsArray.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
    
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
    
        return (
          <div>
            <ul>
              {renderTodos}
            </ul>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        );
      }
}