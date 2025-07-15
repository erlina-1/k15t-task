import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import './UserTable.css';

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => {
  const term = searchTerm.toLowerCase();
  return (
    user.username.toLowerCase().includes(term) ||
    user.email.toLowerCase().includes(term) ||
    user.address.city.toLowerCase().includes(term) ||
    user.company.name.toLowerCase().includes(term)
  );
});

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ overflowX: 'auto' }}>
        <input
        type="search"
        placeholder="Search by username, email, city, or company"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>City</th>
            <th>Company</th>
            <th>Catch Phrase</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.address.street + ', ' + user.address.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.address.street}
                </a>
              </td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
