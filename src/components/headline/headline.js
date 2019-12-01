import React from 'react';

export class SectionHeadline extends React.Component {
  render() {
    return (
        <h2 className="SP-SectionHeadline">
            SectionHeadline
        </h2>
    );
  }
}

export class IntroHeadline extends React.Component {
    render() {
      return (
          <h1 className="SP-IntroHeadline">
              IntroHeadline
          </h1>
      );
    }
  }

export default { SectionHeadline, IntroHeadline};