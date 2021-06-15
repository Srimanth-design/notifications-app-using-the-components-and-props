function Notification(props) {
  const { iconImg, className, notificationText } = props;
  return (
    <div className={`button ${className} icon-text-div`}>
      <img className="icon" src={iconImg} />
      <p className="message">{notificationText}</p>
    </div>
  );
}

const element = (
  <div className="bg-main">
    <h1>Notifications</h1>
    <div className="main-cont">
      <div className="color-container">
        <Notification
          iconImg="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          notificationText="Information Message"
          className="one"
        />
        <Notification
          iconImg="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          notificationText="Success Message"
          className="two"
        />
        <Notification
          iconImg="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          notificationText="Warning Message"
          className="three"
        />
        <Notification
          iconImg="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          notificationText="Error Message"
          className="four"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
