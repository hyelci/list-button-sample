import ListItem from "../components/ListItem";

import "../Rail-Link.css";

const rows = [
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
  {
    title: "Operational Safety and Maintenance",
    message:
      "Jack Hedges has completed operational safety and maintenance task",
    time: "13:45",
  },
];

function Home() {
  return (
    <div class="rl-table-audit">
      <div class="header">
        <h2>App Activity</h2>
        <p className="clickable">View All</p>
      </div>
      <div class="content rl-greyborder rl-scroll">
        {rows.map((row) => (
          <ListItem item={row} />
        ))}
      </div>
    </div>
  );
}

export default Home;
