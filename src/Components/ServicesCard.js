import "./ServicesStyle.css";

function ServicesCard(props) {


  return (
    <div className="s-card" key={props.key}>
      <span className="s-icon">
        <i className={props.icon}></i>
      </span>
      <span className="s-title">{props.name}</span>
      <span className="s-text">
        {props.description}
      </span>
      <button className="btn-sec">Learn More</button>
    </div>
  );
}

export default ServicesCard;
