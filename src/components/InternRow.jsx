function InternRow({ intern, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <div className="intern-name">
          <span className="avatar">{intern.name.charAt(0).toUpperCase()}</span>
          <span>{intern.name}</span>
        </div>
      </td>
      <td>{intern.email}</td>
      <td>{intern.course}</td>
      <td>
        <span className={`status ${intern.status.toLowerCase()}`}>
          {intern.status}
        </span>
      </td>
      <td>
        <div className="row-actions">
          <button className="btn btn-small btn-edit" onClick={() => onEdit(intern)}>
            Edit
          </button>
          <button
            className="btn btn-small btn-delete"
            onClick={() => onDelete(intern.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default InternRow;