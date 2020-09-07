/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import React from 'react';
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
    const story = { ...props.pageContext.story };
    story.content = JSON.parse(story.content);
    return { story };
  }

  constructor(props) {
    super(props);
    this.state = StoryblokEntry.prepareStory(props);
  }

  render() {
    const { content } = this.state.story;

    const {
      name,
      first_published_at,
      full_slug,
      parent_id,
    } = this.props.pageContext.story;
    const { seo_title, seo_description, seo_image } = content;

    const context = { name, first_published_at, full_slug, parent_id };
    const seo = { seo_title, seo_description, seo_image };

    return (
      <>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
          context,
          seo,
        })}
      </>
    );
  }
}

export default StoryblokEntry;
