import React, { Component } from "react";
import "./directory.styles.scss";

import { sections } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  state = {
    sections: sections,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
