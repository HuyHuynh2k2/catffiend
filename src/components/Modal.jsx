import ReactDom from "react-dom";

// First add another div inside index.html below the root to make sure that render sepatedly from root
// Then using ReactDom.createPortal to make sure it sit on top of everything, and then render it.
export default function Modal(props) {
  const { children, handleCloseModal } = props;

  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay"></button>
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
