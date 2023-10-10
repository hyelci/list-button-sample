function ListItem({ item }) {
  const { title, message, time } = item;
  return (
    <div class="rl-row-audit-small">
      <div class="rl-row-marker"></div>
      <div class="message">
        <h6>{title}</h6>
        <p>{message}</p>
      </div>
      <div class="time">{time}</div>
    </div>
  );
}

export default ListItem;
