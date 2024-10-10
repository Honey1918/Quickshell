import React from "react";
import styles from "../Column/Column.module.css";
import { ReactComponent as LowPriorityIcon } from '../../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as NoPriorityIcon } from '../../assets/icons_FEtask/No-priority.svg';

import { ReactComponent as Todoicon } from '../../assets/icons_FEtask/To-do.svg';
import { ReactComponent as Inprogressicon } from '../../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as Doneicon } from '../../assets/icons_FEtask/Done.svg';
import { ReactComponent as Backlog } from '../../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as Cancelled } from '../../assets/icons_FEtask/Cancelled.svg';

import { ReactComponent as Go } from '../../assets/icons_FEtask/add.svg';
import { ReactComponent as Threedots } from '../../assets/icons_FEtask/3 dot menu.svg';

import AvatarWithStatus from "../Card/Avatar/Avatar";
import FeatureRequestCard from "../Card/FeatureCard";

const icons = {
  Done: <Doneicon />,
  "In progress": <Inprogressicon />,
  Canceled: <Cancelled />,
  Todo: <Todoicon />,
  Backlog: <Backlog />,
  "No priority": <NoPriorityIcon />,
  Low: <LowPriorityIcon />,
  Medium: <MediumPriorityIcon />,
  High: <HighPriorityIcon />,
  Urgent: <UrgentPriorityIcon />,
};

const Column = ({ title, tickets, ordering, grouping }) => {
  return (
    <div className={styles.column}>
      <div className={styles.leftview}>
        <div className="dot">
          {grouping !== undefined && grouping === "user" ? (
            <AvatarWithStatus statusColor={"grey"} grouping={grouping} indashBoard={grouping === "user"} />
          ) : (
            <>{icons[title]}</>
          )}
        </div>

        <div className={styles.name_label}>
          <div className={styles.titleContainer}>
            <h5 className={styles.title}>{title}</h5>
            <h5 className={styles.heading}>{tickets.length}</h5>
          </div>
        </div>

        <div className={styles.iconsname}>
          <Go />
          <Threedots />
        </div>
      </div>

      <div className={styles.card_container}>
        {tickets !== undefined &&
          tickets.map((ticket, i) => (
            <FeatureRequestCard
              key={i}
              id={ticket.id}
              tag={ticket.tag.join("")}
              title={ticket.title}
              status={ticket.status}
              priority={ticket.priority}
              grouping={grouping}
            />
          ))}
      </div>
    </div>
  );
};


export default Column;
