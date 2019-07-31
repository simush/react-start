function Clock(props) {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);

  export default tick;