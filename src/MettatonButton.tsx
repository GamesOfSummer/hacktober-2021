import React from 'react';

const MettatonButton = (props: { label: string | number | undefined; }) => {
  return (
    <input
      type="button"
      value={props.label}
    />
  );
}

export default MettatonButton;