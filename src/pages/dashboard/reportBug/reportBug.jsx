import { useState } from 'react';
import styles from './reportBug.module.css';

const ReportBug = () => {
  const [formData, setFormData] = useState({
    issue: '',
    location: 'Homepage',
    date: '10-04-2025',
    priority: 'medium'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Bug report submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className={styles.bugReportContainer}>
      <h2 className={styles.bugReportTitle}>Report a Bug</h2>

      <form onSubmit={handleSubmit} className={styles.bugReportForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>What issue did you experience?</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleInputChange}
            className={styles.formTextarea}
            placeholder="Describe the issue you encountered..."
            rows={6}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Where did this happen?</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={styles.formSelect}
          >
            <option value="Homepage">Homepage</option>
            <option value="Dashboard">Dashboard</option>
            <option value="My Courses">My Courses</option>
            <option value="Play Games">Play Games</option>
            <option value="Levels & Badges">Levels & Badges</option>
            <option value="Power-Ups">Power-Ups</option>
            <option value="Leaderboard">Leaderboard</option>
            <option value="Help Center">Help Center</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>When did it happen?</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={styles.formDateInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Priority Level</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="priority"
                value="low"
                checked={formData.priority === 'low'}
                onChange={handleInputChange}
              />
              <span className={styles.radioText}>Low (Minor issue)</span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={formData.priority === 'medium'}
                onChange={handleInputChange}
              />
              <span className={styles.radioText}>Medium (Interrupts my study)</span>
            </label>

            <label className={styles.radioOption}>
              <input
                type="radio"
                name="priority"
                value="high"
                checked={formData.priority === 'high'}
                onChange={handleInputChange}
              />
              <span className={styles.radioText}>High (Blocking access)</span>
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportBug;