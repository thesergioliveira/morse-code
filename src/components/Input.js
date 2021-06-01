function Input (props) {
    return (
        <div className="user-input">
            <h2>Code Morse Translator</h2>
            <textarea type="text" maxlength={props.maxLength} rows={props.rows} cols={props.cols}/>
    <p>* Limit of {props.maxLength}ch</p>
        </div>
    );
};
export default Input; 