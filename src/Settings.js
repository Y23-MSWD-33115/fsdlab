import React from 'react';

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <form>
        <div>
          <label>
            Theme:
            <select>
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" defaultChecked />
            Enable Email Notifications
          </label>
        </div>
        <button type="button">Update Settings</button>
      </form>
    </div>
  );
}

export default Settings;
