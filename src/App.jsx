import { useMemo, useState } from "react";
import Card from "./components/Card";
import InternForm from "./components/InternForm";
import InternList from "./components/InternList";
import SearchBar from "./components/SearchBar";
import { initialInterns } from "./constants/interns";
import "./App.css";

function App() {
  const [interns, setInterns] = useState(initialInterns);
  const [searchText, setSearchText] = useState("");
  const [editingIntern, setEditingIntern] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredInterns = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return interns.filter((intern) => {
      const matchesSearch =
        !query ||
        intern.name.toLowerCase().includes(query) ||
        intern.email.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || intern.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [interns, searchText, statusFilter]);

  function handleSave(formData) {
    if (editingIntern) {
      setInterns((current) =>
        current.map((intern) =>
          intern.id === editingIntern.id
            ? { ...intern, ...formData }
            : intern
        )
      );
      setEditingIntern(null);
      return;
    }

    const newIntern = {
      id: Date.now(),
      ...formData
    };

    setInterns((current) => [...current, newIntern]);
  }

  function handleEdit(intern) {
    setEditingIntern(intern);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleDelete(id) {
    setInterns((current) => current.filter((intern) => intern.id !== id));

    if (editingIntern?.id === id) {
      setEditingIntern(null);
    }
  }

  const hasSearchOrFilter =
    searchText.trim() !== "" || statusFilter !== "All";

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Intern Training Program</p>
          <h1>Intern Management Dashboard</h1>
          <p className="hero-copy">
            Manage intern records, learning courses and completion status in one
            simple dashboard.
          </p>
        </div>
        <div className="hero-stat">
          <strong>{interns.length}</strong>
          <span>Total Interns</span>
        </div>
      </header>

      <div className="dashboard-grid">
        <Card className="form-card">
          <InternForm
            editingIntern={editingIntern}
            onSave={handleSave}
            onCancel={() => setEditingIntern(null)}
          />
        </Card>

        <Card className="list-card">
          <div className="list-header">
            <div>
              <p className="eyebrow">Directory</p>
              <h2>Interns</h2>
              <p className="count-text">
                Showing {filteredInterns.length} of {interns.length} interns
              </p>
            </div>

            <div className="filters">
              <SearchBar
                searchText={searchText}
                onSearchChange={setSearchText}
              />
              <div className="status-filter">
                <label htmlFor="statusFilter">Status</label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          <InternList
            interns={filteredInterns}
            totalCount={interns.length}
            hasSearch={hasSearchOrFilter}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Card>
      </div>
    </main>
  );
}

export default App;