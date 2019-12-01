import React from 'react';
import { SectionHeadline } from '../headline/headline';

export class Text extends React.Component {
  render() {
    return (
        <div className="SP-Text">
            {this.props.content}
        </div>
    );
  }
}