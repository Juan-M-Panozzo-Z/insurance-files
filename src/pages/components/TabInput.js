function TabInput({...props }) {
  return (
    <div className={`form-control border-4 rounded-box p-4 ${props.color}`}>
      <label className="label">
        <span className="label-text text-xl">{props.title}</span>
      </label>
      <input
        type="file"
        className="file-input w-full"
        multiple
      />
    </div>
  );
}

export default TabInput;