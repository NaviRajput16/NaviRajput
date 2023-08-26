const MyButton = (props) => {
    console.log(props.title);
    console.log(props.text);
    return (
      <div>
        <h5>{props.title}</h5>
        <button>{props.text}</button>
      </div>
    );
  };

export default MyButton;