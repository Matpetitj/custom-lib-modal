import './modal.css';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, backgroundColor = '#00000088', textColor = '#000', closeButtonColor = '#aaa' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" style={{ backgroundColor }}>
      <div className="modalContent" style={{ color: textColor }}>
        <button className="modalClose" style={{ color: closeButtonColor }} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;