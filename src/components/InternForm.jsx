import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  course: "",
  status: "Active"
};

function InternForm({ editingIntern, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingIntern) {
      setFormData({
        name: editingIntern.name,
        email: editingIntern.email,
        course: editingIntern.course,
        status: editingIntern.status
      });
      setErrors({});
    } else {
      setFormData(emptyForm);
      setErrors({});
    }
  }, [editingIntern]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: ""
      }));
    }
  }

  function validate() {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.course.trim()) nextErrors.course = "Course is required.";
    if (!formData.status) nextErrors.status = "Status is required.";

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSave(formData);

    if (!editingIntern) {
      setFormData(emptyForm);
    }
    setErrors({});
  }

  return (
    <form className="intern-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <div>
          <p className="eyebrow">{editingIntern ? "Edit record" : "New record"}</p>
          <h2>{editingIntern ? "Edit Intern" : "Add Intern"}</h2>
        </div>
        {editingIntern && (
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter intern name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="field">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course"
          />
          {errors.course && <span className="error">{errors.course}</span>}
        </div>

        <div className="field">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <span className="error">{errors.status}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        {editingIntern ? "Update Intern" : "Add Intern"}
      </button>
    </form>
  );
}

export default InternForm;