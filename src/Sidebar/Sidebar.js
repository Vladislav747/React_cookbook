import React, { Component } from 'react';

export default class Sidebar extends React.Component { 
    handleAsideRef = node => {
        if (this.props.onRef) {
          this.props.onRef(node);
        }
      };
    render(){
    return <aside 
    ref={this.handlesideRef}
    className={this.props.isOpen ? 'isOpen' : ''}>
      Sidebar
      
      {this.props.children}</aside>;
}
 }
