import React from "react";
import styles from "./Card.module.css";
import AvatarWithStatus from "./Avatar/Avatar";
import { ReactComponent as LowPriorityIcon } from '../../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../../assets/icons_FEtask/SVG - Urgent Priority grey.svg';
import { ReactComponent as NoPriorityIcon } from '../../assets/icons_FEtask/No-priority.svg';

import { ReactComponent as Todoicon } from '../../assets/icons_FEtask/To-do.svg';
import { ReactComponent as Inprogressicon } from '../../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as Doneicon } from '../../assets/icons_FEtask/Done.svg';
import { ReactComponent as Backlog } from '../../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as Cancelled } from '../../assets/icons_FEtask/Cancelled.svg';

const priorityIcons = {
  4: <UrgentPriorityIcon />,
  3: <HighPriorityIcon />,
  2: <MediumPriorityIcon />,
  1: <LowPriorityIcon />,
  0: <NoPriorityIcon />
};

const statusIcons = {
  Todo: <Todoicon />,
  "In progress": <Inprogressicon />,
  Done: <Doneicon />,
  Backlog: <Backlog />,
  Canceled: <Cancelled />
};

const FeatureRequestCard = ({ id, title, tag, grouping, status, priority }) => {

  const priorityNumber = {
    Urgent: 4,
    High: 3,
    Medium: 2,
    Low: 1,
    "No priority": 0
  }[priority];

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.headerText}>{id}</span>
          <span className={styles.statusBubble}></span>
          <AvatarWithStatus statusColor={"grey"} grouping={grouping} indashBoard={grouping !== "user"} />
        </div>
        <div className={styles.content}>
          <div className={styles.iconAndTitle}>
            {/* Displaying icons based on grouping */}
            {grouping === "priority" && statusIcons[status]}
            {grouping === "user" && statusIcons[status]}


            <h2 className={styles.title}>{title}</h2>
          </div>


          <div className={styles.inside}>          
          {grouping === "status" && (
            <div className={styles.iconWrapperWithBorder}>
              {priorityIcons[priority]}
            </div>
          )}
          {grouping === "user" && (
            <div className={styles.iconWrapperWithBorder}>
              {priorityIcons[priority]}
            </div>
          )}
            <div className={styles.insideWrapper}>
            <div className={styles.dot}></div>
            <button className={styles.featureRequestButton}>{tag}</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestCard;
