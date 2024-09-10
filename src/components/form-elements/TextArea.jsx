/* eslint-disable react/prop-types */

export default function TextArea(props) {
  return (
    <>
      <textarea className={props.className || ''} rows={props.row || '3'}></textarea>
    </>
  );
}
