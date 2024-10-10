import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./DropDownModal.module.css";


import { ReactComponent as Disicon } from '../../assets/icons_FEtask/Display.svg';
import { ReactComponent as Dropicon } from '../../assets/icons_FEtask/down.svg';


const DropDownModal = ({ setGrouping, setOrdering,ordering,grouping }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const componentRef = useRef(null);

  const openDropdown = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onClickOutSide = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", onClickOutSide);

    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  });



  const onGroupingChange = useCallback((e) => {
    setGrouping(e.target.value);
    console.log("priyansh");
  }, []);
  const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);

  return (
    <div className={styles.display_dropdown} ref={componentRef}>
      <div
        className={styles.dropdown_label_container}
        onClick={() => {
          openDropdown();
          console.log("yyyyy");
        }}
      >
        <Disicon/>
        <div>Display</div>
        <Dropicon />
      </div>

      <div >
      {isModalOpen && (
        <div className={styles.dropdown_content_container}>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Grouping</div>
            <select
              name="grouping"
              id="grouping"
              value={grouping}
              onChange={onGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className={styles.dropdown_content_row}>
            <div className={styles.dropdown_content_label}>Ordering</div>
            <select
              name="ordering"
              id="ordering"
              value={ordering}
              onChange={onOrderingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default DropDownModal;

const DropDownOptionComponent = ({ category, options, setOrderOrGroup }) => {
  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <div className={styles.dropdown_content_row}>
      <div className={styles.dropdown_content_label}>{category}</div>

      <div className={styles.dropdown_content_label}>
        <select name="drop_select" id="drop_select">
          {options !== undefined &&
            options.map((opt, i) => {
              return (
                <option
                  key={i}
                  value={opt}
                  onChange={console.log("IITROPAR ")}
                >
                  {opt}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};
