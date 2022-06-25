export default function DataPreview(props) {
  return (
    <div className="row">
      <h4 className="col-md-5">{props.field}</h4>
      <h4 className="col-md-1">:</h4>
      <h4 className="col-md-6">{props.value}</h4>
    </div>
  );
}
