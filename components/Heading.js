function Heading(props) {
  const Tag = 'h' + props.headingLevel;
  return <Tag className={props.titleStyle}>{props.title}</Tag>;
}

export default Heading;
