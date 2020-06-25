/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Components from '../components/storyblok/Storyblok';

// ====

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null;
    }
    return StoryblokEntry.prepareStory(props);
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story);
    story.content = JSON.parse(story.content);
    return { story };
  }

  constructor(props) {
    super(props);
    this.state = StoryblokEntry.prepareStory(props);
  }

  render() {
    const content = this.state.story.content;

    return (
      <>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
        })}
      </>
    );
  }
}

export default StoryblokEntry;
