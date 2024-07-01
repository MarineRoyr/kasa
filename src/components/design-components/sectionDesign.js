import React, { useState, useRef } from 'react';
import '../../assets/styles/App.scss';
import '../../assets/styles/Collapse.scss'
import ChevronUp from '../design-components/chevronUp'


const SectionDesign = ({ children, Title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'is-open' : 'is-closed'}`}>
      <button className="collapseToggle" onClick={toggleCollapse}>
        {Title} 
      <ChevronUp />
      </button>
      <div 
        className="collapseContent"
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionDesign;