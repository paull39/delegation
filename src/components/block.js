import React from 'react';

export class Block extends React.Component {
  render() {
    if (this.props.headline) {
        return (
            <section className="SP-Block__section">
                {this.props.headline(this.props.headlineContent)}
                {this.props.section(this.props.sectionContent)}
            </section>
        );
    } else {
        return (
            <div className="SP-Block__div">
                {this.props.section(this.props.sectionContent)}
            </div>
        );
    }
  }
}