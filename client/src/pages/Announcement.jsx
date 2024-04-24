import React, { useState } from 'react';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Welcome to our class!", content: "This is our first announcement. Welcome to the class!" }
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewAnnouncement({ ...newAnnouncement, [name]: value });
  };

  const handleAddAnnouncement = () => {
    if (newAnnouncement.title.trim() !== "" && newAnnouncement.content.trim() !== "") {
      const newId = Math.max(...announcements.map(announcement => announcement.id), 0) + 1;
      const newAnnouncementObj = { id: newId, ...newAnnouncement };
      setAnnouncements([...announcements, newAnnouncementObj]);
      setNewAnnouncement({ title: "", content: "" });
    }
  };

  return (
    <div className="announcement">
      <h2>Announcements</h2>
      <div>
        <input type="text" name="title" placeholder="Title" value={newAnnouncement.title} onChange={handleChange} />
        <textarea name="content" placeholder="Announcement content" value={newAnnouncement.content} onChange={handleChange}></textarea>
        <button onClick={handleAddAnnouncement}>Add Announcement</button>
      </div>
      <ul>
        {announcements.map(announcement => (
          <li key={announcement.id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
