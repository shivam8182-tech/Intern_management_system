import InternRow from "./InternRow";

function InternList({ interns, totalCount, hasSearch, onEdit, onDelete }) {
  if (totalCount === 0) {
    return <div className="empty-state">No interns yet</div>;
  }

  if (interns.length === 0 && hasSearch) {
    return <div className="empty-state">No interns match your search</div>;
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern) => (
            <InternRow
              key={intern.id}
              intern={intern}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InternList;