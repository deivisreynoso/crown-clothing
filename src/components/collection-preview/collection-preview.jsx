import React from "react";

import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemsProps }) => {
            return <CollectionItem key={id} {...itemsProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
